import React from "react";
import {currencyFormatter} from '../utils'

const getProgressBar = (amount, max) => {
  const primary = 'var(--progress-color)'
  const warning = 'var(--progress-color-yellow)'
  const danger = 'var(--progress-color-red)'

  const ratio = amount / max
  if (ratio < 0.5) return primary
  if (ratio < 0.75) return warning
  return danger
}

function Card({
  hideButtons,
  name,
  amount,
  max,
  onAddExpenseClick,
  onViewExpensesClick
}) {
  const classNames = []
  if (amount > max) {
    classNames.push('danger')
  }

  const progress = (amount / max) *100
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
        <div className={`card__body-progressbar`}
        min={0}
        max={max}
        now={amount}
        style={{width: `${progress}%`, backgroundColor: `${getProgressBar(amount, max)}`}}
        ></div>
      </div>
      )}
      {!hideButtons && (
        <div className="card__body-btn flex">
        <button
          className="card__body-add btn"
          onClick={onAddExpenseClick}
        >
          Добавить
        </button>
        <button
          className="card__body-see btn"
          onClick={onViewExpensesClick}
        >
          Посмотреть
        </button>
      </div>
      )}

    </div>
  );
}

export default Card;
