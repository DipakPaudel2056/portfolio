"use client";

const DeleteBlog = ({ id }) => {
  const handleDelete = async () => {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    window.location.reload();
  };
  return (
    <button type="submit" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteBlog;
