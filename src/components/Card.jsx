import React from "react";
import {currencyFormatter} from '../utils'

const getProgressBar = (amount, max) => {
  const ratio = amount / max
  if (ratio < 0.5) return 'primary'
  if (ratio < 0.75) return 'warning'
  return 'danger'
}

function Card({
  onSetShowAddExpense,
  onSetViewExpense,
  hideButtons,
  name,
  amount,
  max
}) {
  const classNames = []
  if (amount > max) {
    classNames.push('danger')
  }
  return (
    <div className="card__body">
      <div className="card__body-header flex">
        <h4 className="card__body-title">{name}</h4>
        <div className="card__body-stat">
          {currencyFormatter.format(amount)}
          {max && (
            <span className="card__body-probability"> / {currencyFormatter.format(max)}
            </span>
          )}
        </div>
      </div>
      {max && (
        <div className="card__body-progress flex">
        <div className={`card__body-progressbar ${classNames}`}
        variant={getProgressBar(amount, max)}
        min={0}
        max={max}
        now={amount}
        ></div>
      </div>
      )}
      {!hideButtons && (
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
      )}

    </div>
  );
}

export default Card;
