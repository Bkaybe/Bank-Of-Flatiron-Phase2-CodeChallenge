import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import axios from "axios";

const TransactionForm = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const postData = () => {
    axios.post(`https://flatiron-backend-rouge.vercel.app/transactions`, {
      date,
      description,
      category,
      amount,
    });
  };

  return (
    <div>
      <form
        action="#"
        className="grid grid-cols-3 gap-[20px] mt-[20px] bg-white p-[20px] rounded-[15px]"
        onSubmit={postData}>
        <InputField type="Date" onChange={(e) => setDate(e.target.value)} />
        <InputField
          type="Text"
          placeholder="Transaction Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputField
          type="Text"
          placeholder="Transaction Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputField
          type="Text"
          placeholder="Amount Transacted"
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button type="Submit" btnTxt="Add New Transaction" />
      </form>
    </div>
  );
};

export default TransactionForm;
