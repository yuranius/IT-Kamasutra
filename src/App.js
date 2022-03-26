import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className='wrapper'>
			<div className='wrapper-container'>
				<header className='header'>
          <div className="conteiner">
            <div className='header__body'>
              <a href='#' className='header__logo'>
                <img src='logo' alt=''></img>
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
                <h2 className='sidebar__title'>
                  Posts
                </h2>
                <div className='sidebar__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  totam cumque ea debitis, quasi nesciunt magnam fugit reprehenderit
                  nihil. Impedit, quo praesentium pariatur atque veniam unde
                  aspernatur optio quaerat facere.
                </div>
              </div>
              <div className="posts">
                <h2 className='posts__title' id='two-title'>
                  Posts
                </h2>
                <div className='posts__text' id='two-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  totam cumque ea debitis, quasi nesciunt magnam fugit reprehenderit
                  nihil. Impedit, quo praesentium pariatur atque veniam unde
                  aspernatur optio quaerat facere.
                </div>
              </div>
              <div className="aside">
                <h2 className='posts__title' id='two-title'>
                  Posts
                </h2>
                <div className='posts__text' id='two-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  totam cumque ea debitis, quasi nesciunt magnam fugit reprehenderit
                  nihil. Impedit, quo praesentium pariatur atque veniam unde
                  aspernatur optio quaerat facere.
                </div>
              </div>
					  </div>
          </div>
				</main>



				<footer className='footer'>
        <div className="conteiner">
					<div className='footer__body'>
						<h2 className='footer__title' id='two-title'>
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
