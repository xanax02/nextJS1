import axios from "axios";
import prisma from "@/db";

async function getUserData() {
  // const response = await axios.get("http://localhost:3000/api/user")
  // return response.data;
  try {
    const user = await prisma.user.findFirst({});
	  return {
      name: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {

  const userData = await getUserData();;

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                Email : {userData?.email}
            </div>
        </div>
    </div>
  );
}
