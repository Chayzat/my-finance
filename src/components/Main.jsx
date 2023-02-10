import React, {useState} from 'react'
import AddAccount from './AddAccount'
import AddExpense from './AddExpense'
import Card from './Card'
import ViewExpense from './ViewExpense'

function Main() {
      const [showAddAccount, setShowAddAccount] = useState(false)
      const [showAddExpense, setShowAddExpense] = useState(false)
      const [showViewExpense, setViewExpense] = useState(false)

      const onHandleClose = (e) => {
        e.preventDefault()
        setViewExpense(false)
      }

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
                        <div className="card__body-progressbar"></div>
                    </div>
                </div>
                <Card onSetShowAddExpense={() => setShowAddExpense(true)}  onSetViewExpense={() => setViewExpense(true)}/>
                <Card onSetShowAddExpense={() => setShowAddExpense(true)}  onSetViewExpense={() => setViewExpense(true)}/>
            </div>
            <AddAccount show={showAddAccount}  handleClose={() => setShowAddAccount(false)}/>
            <AddExpense show={showAddExpense}  handleClose={() => setShowAddExpense(false)}/>
            <ViewExpense show={showViewExpense}  handleClose={onHandleClose} />
         </section>
    </main>
    </>
  )
}

export default Main