import SearchContainer from "./SearchContainer";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/transactions`).then((res) => {
      setTransactions(res.data);
    });
  }, []);

  console.log(transactions);

  return (
    <>
      <header className="bg-[#282c34] flex flex-col items-center justify-center text-white text-[30px] pt-[10px] rounded-[15px]">
        BANK OF FLATIRON
      </header>
      <SearchContainer transactions={transactions} />
      <TransactionForm />
      <TransactionList transactions={transactions} />
    </>
  );
};

export default App;
