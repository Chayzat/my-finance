import React, { useState } from "react";
import { useAccount } from "../context/AccountContext";
import AddAccount from "./AddAccount";
import AddExpense from "./AddExpense";
import Card from "./Card";
import TotalCard from "./TotalCard";
import ViewExpense from "./ViewExpense";

function Main() {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showViewExpense, setViewExpense] = useState(false);
  const [viewExpensesAccountId, setViewExpensesAccountId] = useState()
  const {accounts, getAccountExpenses} = useAccount()

  const onHandleClose = (e) => {
    e.preventDefault();
    setViewExpense(false);
  };

  return (
    <>
      <header className="header" id="header">
        <div  className="heading container flex">
          <h1 className="heading__title">Мои финансы</h1>
          <button
            className="heading__btn btn"
            show={showAddAccount}
            onClick={() => setShowAddAccount(true)}
          >
            Добавить
          </button>
        </div>
      </header>
      <main className="main">
        <section className="account section">
          <div className="card container grid">
            <TotalCard />
            {accounts.map(account => {
              const amount = getAccountExpenses(account.id).reduce(
                (total, expense) => total + expense.amount, 0
              )
              return (
                <Card
                key={account.id}
                name={account.name}
                amount={amount}
                max={account.max}
                />
              )
            })}
          </div>
        </section>
        <AddAccount
            show={showAddAccount}
            handleClose={() => setShowAddAccount(false)}
          />
          <AddExpense
          defaultAccountId={viewExpensesAccountId}
            show={showAddExpense}
            handleClose={() => setShowAddExpense(false)}
          />
          <ViewExpense accountId={viewExpensesAccountId} show={showViewExpense} handleClose={onHandleClose} />
      </main>
    </>
  );
}

export default Main;
