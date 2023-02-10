import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function AddExpense({show, handleClose}) {
  return (
    <div className={`form__container container center ${show ? "show" : "hide"}`}>
        <form className='form'>
            <div className="form__heading flex">
                <h3 className="form__heading-title">Новый расход</h3>
                <button onClick={() => handleClose()} className="form__heading-btn close-btn">
                <AiOutlineClose/>
                </button>
            </div>
            <div className="form__body">
              <div className="form__body-box">
                <label htmlFor='name'>Название</label>
                <input type={"text"} id="name" className='form__body-control' required/>
              </div>
               <div className="form__body-box">
                <label htmlFor='amount'>Сумма</label>
                <input type={"number"} id="amount" min={'0'} step="0.01" className='form__body-control' required/>
              </div>
              <div className="form__body-box">
                <label htmlFor='accountId'>Категория</label>
                <select id="accountId" className='form__body-control'>
                    <option>Прочее</option>
                </select>
              </div>
              <div className="form__body-btn">
                <button className='btn'>Добавить</button>
              </div>
            </div>
        </form>
    </div>
  )
}

export default AddExpense