const TransactionList = ({ Transactions1 }) => {
  return (
    <div>
      {Transactions1.map((transaction) => {
        return (
          <p key={transaction.id}>
            Transaction Date: {transaction.date} , Description:
            {transaction.descriprion}, Amount:
            {transaction.amount}
          </p>
        );
      })}
    </div>
  );
};

export default TransactionList;
