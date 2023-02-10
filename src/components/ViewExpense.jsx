import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function ViewExpense({show, handleClose}) {
  return (
    <div className={`form__container container center ${show ? "show" : "hide"}`}>
      <form className="form">
        <div className="form__heading flex">
          <h3 className="form__heading-title">{"Расходы"}</h3>
          <button onClick={handleClose} className="form__heading-btn close-btn">
            <AiOutlineClose />
          </button>
        </div>
        <div className="form__body">
          <div className="form__body-expense">
            <div className="expense__info flex">
                <p className="expense__info-name">Lorem, ipsum dolor.</p>
                <span className="expense__info-sum">10p</span>
                <button className="close-btn clear__btn"><AiOutlineClose /></button>
            </div>
            <div className="expense__info flex">
                <p className="expense__info-name">Lorem, ipsum dolor.</p>
                <span className="expense__info-sum">10p</span>
                <button className="close-btn clear__btn"><AiOutlineClose /></button>
            </div>
            <div className="expense__info flex">
                <p className="expense__info-name">Lorem, ipsum dolor.</p>
                <span className="expense__info-sum">10p</span>
                <button className="close-btn clear__btn"><AiOutlineClose /></button>
            </div>
          </div>
          <div className="form__body-btn">
            <button className="delete__btn btn">Удалить</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ViewExpense;
