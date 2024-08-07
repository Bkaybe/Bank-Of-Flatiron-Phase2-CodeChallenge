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
            placeholder="Search...."
            required
          />
        </form>
      </div>

      <div>
        <form action="#" className="transactionForm">
          <input className="search-input" type="date" placeholder="" required />
          <input
            className="search-input"
            type="text"
            placeholder="Description"
            required
          />
          <input
            className="search-input"
            type="text"
            placeholder="Category"
            required
          />
          <input
            className="search-input"
            type="text"
            placeholder="Amount"
            required
          />
          <button className="addTransactionBtn">Add New Transaction</button>
        </form>
      </div>

      <div className="transaction-List">
        <table>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>1</td>
            <td>06/09/2001</td>
            <td>Transport</td>
            <td>20000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>06/09/2001</td>
            <td>Food</td>
            <td>10000</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
