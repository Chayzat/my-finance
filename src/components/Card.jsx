import React from "react";

function Card({onSetShowAddExpense, onSetViewExpense}) {
  return (
    <div className="card__body">
      <div className="card__body-header flex">
        <h4 className="card__body-title">Обязательные:</h4>
        <div className="card__body-stat">
          200 <span className="card__body-probability"> / 7800</span>
        </div>
      </div>
      <div className="card__body-progress flex">
        <div className="card__body-progressbar"></div>
      </div>
      <div className="card__body-btn flex">
        <button
          className="card__body-add btn"
          onClick={onSetShowAddExpense}
        >
          Добавить
        </button>
        <button
          className="card__body-see btn"
          onClick={onSetViewExpense}
        >
          Посмотреть
        </button>
      </div>
    </div>
  );
}

export default Card;
