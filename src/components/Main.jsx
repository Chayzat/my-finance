import React from 'react'
import AddAccount from './AddAccount'
import AddExpense from './AddExpense'

function Main() {
  return (
    <main className="main">
         <section className="account section">
            <div className="card container grid">
                <div className="card__body">
                    <div className="card__body-header flex">
                        <h4 className="card__body-title">Всего:</h4>
                        <div className="card__body-stat">
                            200 <span className="card__body-probability"> / 7800</span>
                        </div>
                    </div>
                    <div className="card__body-progress flex">
                        <div className="card__body-progressbar">

                        </div>
                    </div>
                </div>
                <div className="card__body">
                    <div className="card__body-header flex">
                        <h4 className="card__body-title">Обязательные:</h4>
                        <div className="card__body-stat">
                            200 <span className="card__body-probability"> / 7800</span>
                        </div>
                    </div>
                    <div className="card__body-progress flex">
                        <div className="card__body-progressbar">

                        </div>
                    </div>
                    <div className="card__body-btn flex">
                        <button className="card__body-add btn">Добавить</button>
                        <button className="card__body-see btn">Посмотреть</button>
                    </div>
                </div>
                <div className="card__body">
                    <div className="card__body-header flex">
                        <h4 className="card__body-title">Продукты:</h4>
                        <div className="card__body-stat">
                            200 <span className="card__body-probability"> / 7800</span>
                        </div>
                    </div>
                    <div className="card__body-progress flex">
                        <div className="card__body-progressbar">

                        </div>
                    </div>
                    <div className="card__body-btn flex">
                        <button className="card__body-add btn">Добавить</button>
                        <button className="card__body-see btn">Посмотреть</button>
                    </div>
                </div>
            </div>
            <AddAccount/>
            <AddExpense/>
         </section>
    </main>
  )
}

export default Main