import axios from "axios";

async function getUserData(){
  const response = await axios.get('http://localhost:3000/api/user')
  return response.data;
}

export default async function Home() {

  const userDetails = await getUserData();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>
        Name: {userDetails.name}
      </h1>
      <br />
      <h3>
        Email: {userDetails.email}
      </h3>
    </div>
  );
}
