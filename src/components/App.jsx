const App = () => {
  return (
    <>
      <header className="bg-[#282c34] flex flex-col items-center justify-center text-white text-[30px] pt-[10px] rounded-[15px]">
        BANK OF FLATIRON
      </header>

      <div>
        <form
          action="#"
          className="grid grid-cols-3 gap-[20px] mt-[20px] bg-white p-[20px] rounded-[15px]">
          <input
            className="text-[25px] rounded-[10px] bg-[#282c34] text-white font-mono"
            type="date"
            placeholder=""
            required
          />
          <input
            className="text-[25px] rounded-[10px] bg-[#282c34] text-white font-mono"
            type="text"
            placeholder="Description"
            required
          />
          <input
            className="text-[25px] rounded-[10px] bg-[#282c34] text-white font-mono"
            type="text"
            placeholder="Category"
            required
          />
          <input
            className="text-[25px] rounded-[10px] bg-[#282c34] text-white font-mono"
            type="text"
            placeholder="Amount"
            required
          />
          <button className="mt-[10px] text-[25px] bg-azure rounded-[10px] font-mono">
            Add New Transaction
          </button>
        </form>
      </div>

      <div className="transaction-List">
        <table className="font-mono border-collapse w-full mt-[20px] rounded-[15px]">
          <thead>
            <tr>
              <th className="">ID</th>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#6d6a6a] text-center p-[8px]">1</td>
              <td className="border border-[#6d6a6a] text-center p-[8px]">
                06/09/2001
              </td>
              <td className="border border-[#6d6a6a] text-center p-[8px]">
                Transport
              </td>
              <td className="border border-[#6d6a6a] text-center p-[8px]">
                20000
              </td>
            </tr>
            <tr>
              <td className="border border-[#6d6a6a] text-center p-[8px]">2</td>
              <td className="border border-[#6d6a6a] text-center p-[8px]">
                06/09/2001
              </td>
              <td className="border border-[#6d6a6a] text-center p-[8px]">
                Food
              </td>
              <td className="border border-[#6d6a6a] text-center p-[8px]">
                10000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
