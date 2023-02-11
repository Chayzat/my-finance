import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAccount } from "../context/AccountContext";

function AddAccount({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addAccount } = useAccount();
  const handleSubmit = (e) => {
    e.preventDefault();
    addAccount({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
  };
  return (
    <div className={`wrapper ${show ? "show" : "hide"}`}>
      <div
        className={`form__container container center ${show ? "show" : "hide"}`}
      >
        <form onSubmit={handleSubmit} className="form">
          <div className="form__heading flex">
            <h3 className="form__heading-title">Новая категория</h3>
            <button
              onClick={handleClose}
              className="form__heading-btn close-btn"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="form__body">
            <div className="form__body-box">
              <label>Название</label>
              <input
              ref={nameRef}
                type={"text"}
                id="name"
                className="form__body-control"
                required
              />
            </div>
            <div className="form__body-box">
              <label>Максимальная сумма</label>
              <input
              ref={maxRef}
                type={"number"}
                id="max"
                min={"0"}
                step="0.01"
                className="form__body-control"
                required
              />
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

export default AddAccount;
