import React from 'react'

function Header() {
  return (
    <header class="header" id="header">
        <div class="heading container flex">
            <h1 class="heading__title">Мои финансы</h1>
            <button class="heading__btn btn">Добавить</button>
        </div>
    </header>
  )
}

export default Header