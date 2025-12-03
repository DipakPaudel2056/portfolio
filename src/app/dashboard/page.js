import { getServerSession } from "next-auth";
import "../../app/ui/Signout"
import "./style.css";
// import prisma library to display all messages
import prisma from "../lib/prisma";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import Signout from "../../app/ui/Signout";
const Page = async () => {
  const session = await getServerSession();
  if (!session) {
    return <div className="main">Not authorized!</div>;
  }
  const messages = await prisma.message.findMany();
  return (
    <div className="main">
      <h1>welcome to admin dashboard page{session.user.email}</h1>
      <Link href="/dashboard/blog">
        <button>create post</button>
      </Link>
      {messages.map((message) => (
        <div className="message__card" key={message.id}>
          <p>{message.first_name}</p>
          <p>{message.last_name}</p>
          <p>{message.email}</p>
          <p>{message.phone}</p>
          <p>{message.message}</p>
        </div>
      ))}
        <Signout />
    </div>
  );
};

export default Page;
