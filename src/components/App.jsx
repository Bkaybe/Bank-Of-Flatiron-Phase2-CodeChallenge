import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function App() {
  const Transactions = [
    {
      id: "1",
      date: "2019-12-01",
      descriprion: "Income",
      amount: 1000,
    },
  ];
  return (
    <>
      <header className="text-center bg-gray-700 text-3xl">
        BANK OF FLAT IRON
      </header>
      <TransactionForm />
      <TransactionList Transactions1={Transactions}/>
    </>
  );
}

export default App;
