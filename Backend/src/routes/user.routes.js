import {Router} from "express"
import { changeCurrentPassword, loginUser, logOutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js"
import  {upload}  from "../middlewares/multe.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(upload.fields(
    [{
        name: "avatar",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }]
),registerUser)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,logOutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/update-password").patch(verifyJWT, changeCurrentPassword)


export default router

