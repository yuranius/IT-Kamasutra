import logo from "./image/many.webp";
import "./App.css";

function App() {
	return (
		<div className='wrapper'>
			<div className='wrapper-container'>
				<header className='header'>
          <div className="conteiner">
            <div className='header__body'>
              <a href='#' className='header__logo'>
                <img src={logo} alt='logo' />
              </a>
              <div className='header__burger'>
                <span></span>
              </div>
              <nav className='header__menu'>
                <ul className='header__list'>
                  <li>
                    <a href='' className='header__link'>
                      Главное
                    </a>
                  </li>
                  <li>
                    <a href='' className='header__link'>
                      Уроки
                    </a>
                  </li>
                  <li>
                    <a href='' className='header__link'>
                      Контакты
                    </a>
                  </li>
                  <li>
                    <a href='' className='header__link'>
                      Шпаргалки
                    </a>
                  </li>
                  <li>
                    <a href='' className='header__link'>
                      Полезное
                    </a>
                  </li>
                  <li>
                    <a href='' className='header__link'>
                      О канале
                    </a>
                  </li>
                </ul>
              </nav>
					  </div>
          </div>
				</header>



				<main className='main'>
          <div className="conteiner">
					  <div className='main__body'>
              <div className="sidebar">
                <div className="sidebar__block">
                  <nav className='sidebar__menu'>
                  <ul className='sidebar__list'>
                    <li>
                      <a href='' className='sidebar__link'>Главное</a>
                    </li>
                    <li>
                      <a href='' className='sidebar__link'>Уроки</a>
                    </li>
                    <li>
                      <a href='' className='sidebar__link'>
                        Контакты
                      </a>
                    </li>
                    <li>
                      <a href='' className='sidebar__link'>
                        Шпаргалки
                      </a>
                    </li>
                    <li>
                      <a href='' className='sidebar__link'>
                        Полезное
                      </a>
                    </li>
                    <li>
                      <a href='' className='sidebar__link'>
                        О канале
                      </a>
                    </li>
                  </ul>
                  </nav>
                </div>
              </div>
              <div className="posts">
                <div className="posts__block">
                  <h2 className='posts__title'>
                    Posts
                    
                  </h2>
                  <div className='posts__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                    totam cumque ea debitis, quasi nesciunt magnam fugit reprehenderit
                    nihil. Impedit, quo praesentium pariatur atque veniam unde
                    aspernatur optio quaerat facere.
                  </div>
                </div>
              </div>
              <div className="aside">
                <div className="aside__block">
                  <h2 className='aside__title'>
                    {/* <img src={many} alt=""/> */}
                    Posts
                  </h2>
                  <div className='aside__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                    totam cumque ea debitis, quasi nesciunt magnam fugit reprehenderit
                    nihil. Impedit, quo praesentium pariatur atque veniam unde
                    aspernatur optio quaerat facere.
                  </div>
                </div>
              </div>
					  </div>
          </div>
				</main>



				<footer className='footer'>
        <div className="conteiner">
					<div className='footer__body'>
						<h2 className='footer__title'>
							футер
						</h2>
					</div>
          </div>
				</footer>
			</div>
		</div>
	);
}

export default App;
