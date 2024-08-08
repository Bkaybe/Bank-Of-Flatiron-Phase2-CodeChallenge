import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import axios from "axios";

const TransactionForm = ({ onSuccessPost }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://backend-for-flatdango-bank.vercel.app/transactions",
        {
          date,
          description,
          category,
          amount: parseFloat(amount),
        }
      );
      alert("Successfully Posted Data!!! Reload page");
      if (onSuccessPost) {
        await onSuccessPost();
      }

      setDate("");
      setDescription("");
      setCategory("");
      setAmount("");
    } catch (error) {
      console.log("Error posting the transactions:", error);
    }
  };

  return (
    <div>
      <form
        action="#"
        className="grid grid-cols-3 gap-[20px] mt-[20px] bg-white p-[20px] rounded-[15px]"
        onSubmit={postData}>
        <InputField
          required
          type="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <InputField
          type="Text"
          placeholder="Transaction Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <InputField
          type="Text"
          placeholder="Transaction Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required
        />
        <InputField
          type="Text"
          placeholder="Amount Transacted"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          required
        />
        <Button type="Submit" btnTxt="Add New Transaction" />
      </form>
    </div>
  );
};

export default TransactionForm;
