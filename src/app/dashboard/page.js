import { getServerSession } from "next-auth";
import "./style.css"
// import prisma library to display all messages
import prisma from "../lib/prisma"
const Page = async () => {
  const session = await getServerSession();
  if (!session) {
    return <div className="main">Not authorized!</div>;
  }
  const messages = await prisma.message.findMany()
  return (
    <div className="main">
      <h1>welcome to admin dashboard page{session.user.email}</h1>
      <button>create post</button>
      {messages.map((message)=><div className="message__card" key={message.id}>
        <p>{message.first_name}</p>
        <p>{message.last_name}</p>
        <p>{message.email}</p>
        <p>{message.phone}</p>
        <p>{message.message}</p>
      </div>)}
    </div>
  );
};

export default Page;
