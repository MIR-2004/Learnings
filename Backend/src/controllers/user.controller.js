import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"



const generateAccessAndRefreshToken = async(userId) => {
    try {
        const user = User.findOne(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return{accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Somthing went wrong while generaating access and refresh token")
    }
}

const registerUser = asyncHandler( async(req, res) => {


    // get user details from frontend
    const {username, email, fullname, password} = req.body

    
    //validation - not empty
    if(
        [username, email, fullname, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    //check if user already exist: username, email
    const alreadyExist = await User.findOne({
        $or: [{email}, {username}]
    })

    if (alreadyExist) {
        throw new ApiError(400, "User with email or username already exist")
    }

    //check images, check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path
    /*const coverImageLocalPath = req.files?.coverImage[0]?.path*/
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }


    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required") 
    }

    //upload them to cloudinary, avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Cover Image file is required")    
    }

    //create user object - create entry in db
    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })


    // remove password and refresh token fieldfrom response
    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    
    //check for user creation
    if(!createdUser){
        throw new ApiError(400, "Somthig went wrong while registering the user")
    }


    //return res
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully!!!")
    )

})

const loginUser = asyncHandler( async(req, res) => {
    
    //collect data from body
    const {email, username, password} = req.body

    //username or email
    if (!email || !username) {
        throw new ApiError(400, "Username or email is required")
        
    }

    //check the user already exist or not
    const existedUser = await User.findOne({
        $or: [{email},{username}]
    })

    if (!existedUser) {
        throw new ApiError(404, "User not found")
    }

    //password check
    const isPasswordValid = await existedUser.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Password incorrect")
    }

    //access and refresh token
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    //send cookie
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200).cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options).json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User Logged in Successfully!!!"
        )
    )
})


const logOutUser = asyncHandler( async(req, res)=> {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
            }
        },
        {
            new: true
        }
    )


    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options).json(new ApiResponse(200, {}, "User logout successfully"))
})


export {
    registerUser,
    loginUser,
    logOutUser
}