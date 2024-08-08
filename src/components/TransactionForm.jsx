import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const TransactionForm = () => {
  return (
    <div>
      <form
        action="#"
        className="grid grid-cols-3 gap-[20px] mt-[20px] bg-white p-[20px] rounded-[15px]">
        <InputField type="Date" />
        <InputField type="Text" placeholder="Transaction Description" />
        <InputField type="Text" placeholder="Transaction Category" />
        <InputField type="Text" placeholder="Amount Transacted" />
        <Button type="Submit" btnTxt="Add New Transaction" />
      </form>
    </div>
  );
};

export default TransactionForm;
