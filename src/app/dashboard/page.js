import { getServerSession } from "next-auth";
const Page = async () => {
  const session = await getServerSession();
  if (!session) {
    return <div className="main">Not authorized!</div>;
  }
  return (
    <div className="main">
      <h1>welcome to admin dashboard page{session.user.email}</h1>
      <p>create post</p>
    </div>
  );
};

export default Page;
