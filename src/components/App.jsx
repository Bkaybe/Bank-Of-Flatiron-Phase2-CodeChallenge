import SearchContainer from "./SearchContainer";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const res = await axios.get(
        "https://backend-for-flatdango-bank.vercel.app/transactions"
      );
      setTransactions(res.data);
    } catch (error) {
      console.log("Error getting the transactions : ", error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  console.log(transactions);

  return (
    <>
      <header className="bg-[#282c34] flex flex-col items-center justify-center text-white text-[30px] pt-[10px] rounded-[15px]">
        BANK OF FLATIRON
      </header>
      <SearchContainer transactions={transactions} />
      <TransactionForm onSuccessPost={getTransactions} />
      <TransactionList transactions={transactions} />
    </>
  );
};

export default App;
