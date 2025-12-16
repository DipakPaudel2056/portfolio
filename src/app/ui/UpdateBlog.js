"use client";

import { useRouter } from "next/navigation";
const UpdateBlog = ({id}) => {
    const router = useRouter()
  const handleUpdate = () => {
    // go to the same blog creation page but the input must be filled with the pre-existing data and user can update it
    router.push(`/dashboard/blog/edit/${id}`)
  };
  return (
    <button type="submit" onClick={handleUpdate}>
      UPDATE
    </button>
  );
}

export default UpdateBlog
