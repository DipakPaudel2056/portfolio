import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;
  //   let's create a user with this email and password
//   but hash the password with bcrypt
const hashedPassword = await bcrypt.hash(password,10)
  const newUser = await prisma.user.create({
    data: {
      email,
      password:hashedPassword,
    },
  });

  return new Response(
    JSON.stringify({ message: "successfully registered", newUser }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
