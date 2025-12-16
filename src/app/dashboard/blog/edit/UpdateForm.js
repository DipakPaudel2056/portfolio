"use client";
import { useState } from "react";

const UpdateForm = ({ blogdata }) => {
  const [formData, setFormData] = useState(blogdata);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/blogs/${blogdata.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tag"
          placeholder="tag"
          value={formData.tag}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default UpdateForm;
