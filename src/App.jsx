import React from 'react'

function App() {
  return (
    <div>
      <header class="header" id="header">
        <div class="heading container flex">
            <h1 class="heading__title">Мои финансы</h1>
            <button class="heading__btn btn">Добавить</button>
        </div>
    </header>
    <main class="main">
         <section class="account section">
            <div class="card container grid">
                <div class="card__body">
                    <div class="card__body-header flex">
                        <h4 class="card__body-title">Всего:</h4>
                        <div class="card__body-stat">
                            200 <span class="card__body-probability"> / 7800</span>
                        </div>
                    </div>
                    <div class="card__body-progress flex">
                        <div class="card__body-progressbar">

                        </div>
                    </div>
                    <div class="card__body-btn flex">
                        <button class="card__body-add btn">Добавить</button>
                        <button class="card__body-see btn">Посмотреть</button>
                    </div>
                </div>
                <div class="card__body">
                    <div class="card__body-header flex">
                        <h4 class="card__body-title">Всего:</h4>
                        <div class="card__body-stat">
                            200 <span class="card__body-probability"> / 7800</span>
                        </div>
                    </div>
                    <div class="card__body-progress flex">
                        <div class="card__body-progressbar">

                        </div>
                    </div>
                    <div class="card__body-btn flex">
                        <button class="card__body-add btn">Добавить</button>
                        <button class="card__body-see btn">Посмотреть</button>
                    </div>
                </div>
                <div class="card__body">
                    <div class="card__body-header flex">
                        <h4 class="card__body-title">Всего:</h4>
                        <div class="card__body-stat">
                            200 <span class="card__body-probability"> / 7800</span>
                        </div>
                    </div>
                    <div class="card__body-progress flex">
                        <div class="card__body-progressbar">

                        </div>
                    </div>
                    <div class="card__body-btn flex">
                        <button class="card__body-add btn">Добавить</button>
                        <button class="card__body-see btn">Посмотреть</button>
                    </div>
                </div>
            </div>
         </section>
    </main>
    </div>
  )
}

export default App