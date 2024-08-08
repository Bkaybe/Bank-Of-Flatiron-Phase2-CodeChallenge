import SearchContainer from "./SearchContainer";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const App = () => {
  return (
    <>
      <header className="bg-[#282c34] flex flex-col items-center justify-center text-white text-[30px] pt-[10px] rounded-[15px]">
        BANK OF FLATIRON
      </header>
      <SearchContainer />
      <TransactionForm />
      <TransactionList />
    </>
  );
};

export default App;
