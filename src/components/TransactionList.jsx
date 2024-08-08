import React from "react";
import TableH from "./TableH";
import TableD from "./TableD";

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-List">
      <table className="font-mono border-collapse w-full mt-[20px] rounded-[15px]">
        <thead>
          <tr>
            <TableH tablehead="Date" />
            <TableH tablehead="Description" />
            <TableH tablehead="Category" />
            <TableH tablehead="Amount" />
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <TableD tabledata={transaction.date} />
                <TableD tabledata={transaction.description} />
                <TableD tabledata={transaction.category} />
                <TableD tabledata={transaction.amount} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
