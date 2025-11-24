import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
// here i need to write a server side logic to handle the login
// get 
export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;
  // let's check if the email and password exist or not
  const user = await prisma.user.findUnique({
    where: { email },
  });
//   check if the password hash matches
const isMatch = await bcrypt.compare(password,user.password,)
  if (isMatch) {
    return new Response(
      JSON.stringify({
        message: "successfully logged in",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "couldnot log in",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
