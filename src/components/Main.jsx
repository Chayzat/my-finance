import React, {useState} from 'react'
import AddAccount from './AddAccount'
import AddExpense from './AddExpense'
import ViewExpense from './ViewExpense'

function Main() {
      const [showAddAccount, setShowAddAccount] = useState(false)
      const [showAddExpense, setShowAddExpense] = useState(false)
      const [showViewExpense, setViewExpense] = useState(false)

  return (
    <>
    <header className="header" id="header">
        <div className="heading container flex">
            <h1 className="heading__title">Мои финансы</h1>
            <button className="heading__btn btn" show={showAddAccount}
            onClick={() => setShowAddAccount(true)}
            >Добавить</button>
        </div>
    </header>

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
                        <button className="card__body-add btn"
                        onClick={() => setShowAddExpense(true)}
                        >Добавить</button>
                        <button className="card__body-see btn"
                        onClick={() => setViewExpense(true)}
                        >Посмотреть</button>
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
            <AddAccount show={showAddAccount}  handleClose={() => setShowAddAccount(false)}/>
            <AddExpense show={showAddExpense}  handleClose={() => setShowAddExpense(false)}/>
            <ViewExpense show={showViewExpense}  handleClose={() => showViewExpense(false)} />
         </section>
    </main>
    </>
  )
}

export default Main