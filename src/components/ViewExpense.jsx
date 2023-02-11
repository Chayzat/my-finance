import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UNCATEGORIZED_ID, useAccount } from "../context/AccountContext";
import { currencyFormatter } from "../utils";

function ViewExpense({ accountId, show, handleClose }) {
  const {getAccountExpenses, accounts, deleteAccount, deleteExpense} = useAccount()
  const expenses = getAccountExpenses(accountId)

  const account = UNCATEGORIZED_ID === accountId
  ? {name: 'Uncategorized', id: UNCATEGORIZED_ID}
  : accounts.find(b => b.id === accountId)

  return (
    <div className={`wrapper ${show ? "show" : "hide"}`}>
      <div
        className={`form__container container center ${show ? "show" : "hide"}`}
      >
        <form className="form">
          <div className="form__heading flex">
            <h3 className="form__heading-title">Расходы - {account?.name}</h3>
            <button
              onClick={handleClose}
              className="form__heading-btn close-btn"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="form__body">
            <div className="form__body-expense">
              {expenses.map(expense => (
                <div className="expense__info flex" key={expense.id}>
                <p className="expense__info-name">
                  {expense.description}
                </p>
                <span className="expense__info-sum">
                  {currencyFormatter.format(expense.amount)}
                </span>
                <button
                className="close-btn clear__btn"
                onClick={() => deleteExpense(expense)}
                >
                  <AiOutlineClose />
                </button>
              </div>
              ))}
            </div>
            <div className="form__body-btn">
              <button
              className="delete__btn btn"
              onClick={() => {
                deleteAccount(account)
                handleClose()
              }}
              >Удалить</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViewExpense;
