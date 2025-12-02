const Page = () => {
  return (
    <div className="main">
      create blog page
      <form action="/api/blogs" method="POST">
        <input type="text" name="tag" placeholder="tag" required />
        <input type="text" name="title" placeholder="title" required />
        <textarea name="description" placeholder="description" required />
        <button type="submit">upload</button>
      </form>
    </div>
  );
};

export default Page;
