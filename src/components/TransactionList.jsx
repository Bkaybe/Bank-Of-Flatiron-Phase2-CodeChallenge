import React from "react";
import TableH from "./TableH";
import TableD from "./TableD";

const TransactionList = () => {
  return (
    <div className="transaction-List">
      <table className="font-mono border-collapse w-full mt-[20px] rounded-[15px]">
        <thead>
          <tr>
            <TableH tablehead="ID" />
            <TableH tablehead="Date" />
            <TableH tablehead="Description" />
            <TableH tablehead="Category" />
            <TableH tablehead="Amount" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableD tabledata="1" />
            <TableD tabledata="06/09/20" />
            <TableD tabledata="Food" />
            <TableD tabledata="Groceries" />
            <TableD tabledata="5000" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
