import "./page.css"
const Page = () => {
  return (
    <div className="main">
      <form action="/api/blogs" method="POST" encType="multipart/form-data">
        <input type="text" name="tag" placeholder="tag" required />
        <input type="text" name="title" placeholder="title" required />
        <input type="file" name="image" accept="image/*" />
        <textarea name="description" placeholder="description" required />
        <button type="submit">Upload Blog</button>
      </form>
    </div>
  );
};

export default Page;
