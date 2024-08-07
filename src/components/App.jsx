import "../styles/App.css";

function App() {
  return (
    <>
      <header className="header">BANK OF FLATIRON</header>
      <div className="search-container">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="search...."
            required
          />
        </form>
      </div>

      <div>
        <form action="#" className="transactionForm">
          <input className="search-input" type="date" placeholder="" />
          <input className="search-input" type="text" placeholder=""/>
          <input className="search-input" type="text" placeholder=""/>
          <input className="search-input" type="text" placeholder=""/>
          <button className="addTransactionBtn">Add New Transaction</button>
        </form>
      </div>
    </>
  );
}

export default App;
