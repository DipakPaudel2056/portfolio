"use client";
import { useState } from "react";

export default function IncomePage() {
  const [formData, setFormData] = useState({
    amount: "",
    type: "income",
    category: "other expenses",
  });

  const categories = {
    income: ["-", "salary", "freelance", "investment", "other"],
    expenditure: [
      "-",
      "car",
      "grocery",
      "eating-out",
      "cloths",
      "outing",
      "other expenses",
      "rent",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "type" && { category: "" }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const incomeObject = {
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date(),
      timestamp: new Date().getTime(),
    };
    try {
      await fetch("/api/income", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incomeObject),
      });
    } catch (error) {
      console.log(error.message);
    }

    alert(JSON.stringify(incomeObject));
    setFormData({ amount: "", type: "income", category: "other expenses" });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px" }}>
      <h1>Income & Expenditure Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Amount: </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
            step="0.01"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Type: </label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expenditure">Expenditure</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Category: </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {categories[formData.type].map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
