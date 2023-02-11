import React, { useState } from "react";
import { UNCATEGORIZED_ID, useAccount } from "../context/AccountContext";
import AddAccount from "./AddAccount";
import AddExpense from "./AddExpense";
import Card from "./Card";
import TotalCard from "./TotalCard";
import UncategorizedCard from "./UncategorizedCard";
import ViewExpense from "./ViewExpense";

function Main() {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);

  const [viewExpensesId, setViewExpensesId] = useState()

  const [addExpenseId, setAddExpenseId] = useState()

  const {accounts, getAccountExpenses} = useAccount()

  const showAddExpenseModal = (accountId) => {
    setShowAddExpense(true)
    setAddExpenseId(accountId)
  }

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
              console.log(account.id)
              const amount = getAccountExpenses(account.id).reduce(
                (total, expense) => total + expense.amount, 0
              )
              return (
                <Card
                key={account.id}
                name={account.name}
                amount={amount}
                max={account.max}
                onAddExpenseClick={() => showAddExpenseModal(account.id)}
                onViewExpensesClick={() => setViewExpensesId(account.id)}
                />
              )
            })}
            <UncategorizedCard
            onAddExpenseClick={showAddExpenseModal}
            onViewExpensesClick={() => setViewExpensesId(UNCATEGORIZED_ID)}
            />
          </div>
        </section>
        <AddAccount
            show={showAddAccount}
            handleClose={() => setShowAddAccount(false)}
          />
          <AddExpense
          defaultAccountId={addExpenseId}
            show={showAddExpense}
            handleClose={() => setShowAddExpense(false)}
          />
          <ViewExpense
          accountId={viewExpensesId}
          handleClose={() => setViewExpensesId()}
           />
      </main>
    </>
  );
}

export default Main;
