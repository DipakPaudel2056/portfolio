"use client";
const page = () => {
  // handle submit
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json()
    // handle the routing logic here
    return result
  }
 
  return (
    <div className="main">
      welcome to login page
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default page;
