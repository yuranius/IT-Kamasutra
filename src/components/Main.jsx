let Main = () => {
	return (
		<main className='main'>
			<div className='conteiner'>
				<div className='main__body'>
					<div className='sidebar'>
						<div className='sidebar__block'>
							<nav className='sidebar__menu'>
								<ul className='sidebar__list'>
									<li>
										<a href='' className='sidebar__link'>
											Главное
										</a>
									</li>
									<li>
										<a href='' className='sidebar__link'>
											Уроки
										</a>
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
					<div className='posts'>
						<div className='posts__block'>
							<h2 className='posts__title'>Posts</h2>
							<div className='posts__text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								totam cumque ea debitis, quasi nesciunt magnam fugit
								reprehenderit nihil. Impedit, quo praesentium pariatur atque
								veniam unde aspernatur optio quaerat facere.
							</div>
						</div>
					</div>
					<div className='aside'>
						<div className='aside__block'>
							<h2 className='aside__title'>
								{/* <img src={many} alt=""/> */}
								Posts
							</h2>
							<div className='aside__text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								totam cumque ea debitis, quasi nesciunt magnam fugit
								reprehenderit nihil. Impedit, quo praesentium pariatur atque
								veniam unde aspernatur optio quaerat facere.
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
