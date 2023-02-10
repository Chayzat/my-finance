import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function AddAccount() {
  return (
    <div className='form__container container center'>
        <form className='form'>
            <div className="form__heading flex">
                <h3 className="form__heading-title">Новая категория</h3>
                <button className="form__heading-btn close-btn">
                <AiOutlineClose/>
                </button>
            </div>
            <div className="form__body">
              <div className="form__body-box">
                <label htmlFor='name'>Название</label>
                <input type={"text"} id="name" className='form__body-control' required/>
              </div>
               <div className="form__body-box">
                <label htmlFor='max'>Максимальная сумма</label>
                <input type={"number"} id="max" min={'0'} step="0.01" className='form__body-control' required/>
              </div>
              <div className="form__body-btn">
                <button className='btn'>Добавить</button>
              </div>
            </div>
        </form>
    </div>
  )
}

export default AddAccount