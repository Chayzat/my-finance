import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UNCATEGORIZED_ID, useAccount } from "../context/AccountContext";

function AddExpense({ show, handleClose, defaultAccountId }) {
  const descRef = useRef()
  const amountRef = useRef()
  const accountIdRef = useRef()
  const {addExpense, accounts} = useAccount()

  const handleSubmit = (e) => {
    e.preventDefault()
    addExpense({
      description: descRef.current.value,
      amount: parseFloat(amountRef.current.value),
      accountId: accountIdRef.current.value
    })
    handleClose()
  }
  return (
    <div className={`wrapper ${show ? "show" : "hide"}`}>
      <div
        className={`form__container container center ${show ? "show" : "hide"}`}
      >
        <form onSubmit={handleSubmit} className="form">
          <div className="form__heading flex">
            <h3 className="form__heading-title">Новый расход</h3>
            <button
              onClick={() => handleClose()}
              className="form__heading-btn close-btn"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="form__body">
            <div className="form__body-box">
              <label htmlFor="name">Описание</label>
              <input
              ref={descRef}
                type={"text"}
                id="name"
                className="form__body-control"
                required
              />
            </div>
            <div className="form__body-box">
              <label htmlFor="amount">Сумма</label>
              <input
              ref={amountRef}
                type={"number"}
                id="amount"
                min={"0"}
                step="0.01"
                className="form__body-control"
                required
              />
            </div>
            <div className="form__body-box">
              <label htmlFor="accountId">Категория</label>
              <select
              id="accountId"
              className="form__body-control"
              defaultValue={defaultAccountId}
              ref={accountIdRef}
              >
                <option id={UNCATEGORIZED_ID}>Прочее</option>
                {accounts.map(account => (
                  <option key={account.id} value={account.id}>
                    {account.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form__body-btn">
              <button type="submit" className="btn">Добавить</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
