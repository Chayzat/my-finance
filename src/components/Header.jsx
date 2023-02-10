import React from 'react'

function Header() {
  return (
    <header className="header" id="header">
        <div className="heading container flex">
            <h1 className="heading__title">Мои финансы</h1>
            <button className="heading__btn btn">Добавить</button>
        </div>
    </header>
  )
}

export default Header