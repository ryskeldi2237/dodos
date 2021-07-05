import React from 'react'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__item">
            <div className="footer__subtitle">Додо Пицца</div>
            <ul>
              <li>О нас</li>
              <li>Додо книга</li>
              <li>Блог "Сила ума"</li>
              <li>Додо ИС</li>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__subtitle">Работа</div>
            <ul>
              <li>В пиццерии</li>
            </ul>
          </div>
          <div className="footer__item del">
            <div className="footer__subtitle">Партнерам</div>
            <ul>
              <li>Предложить помещение</li>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__subtitle">Это интресно</div>
            <ul>
              <li>Почему мы готовим без перчаток?</li>
              <li>Экскурсии и мастер-классы</li>
            </ul>
          </div>
        </div>
        <div className="footer__end">
          <div className="footer__dodo">DODO PIZZA</div>
          <div className="footer__text">© 2021</div>
        </div>
      </footer>

    )
}

export default Footer
