import HeaderMenu from './Header-Menu/Header-menu';
import logo from './many.webp';
import scss from './Header.module.scss';
import HeaderLogin from './HeaderLogin/HeaderLogin';

let Header = (props) => {
	return (
		<header className={scss['header']}>
			<div className={scss['conteiner']}>
				<div className={scss['header__body']}>

					<a href='/' className={scss['header__logo']}>
						<img src={logo} alt='logo' />
					</a>


					<HeaderLogin isAuth={props.isAuth} login = {props.login}/>

					<div className={scss['header__burger']}>
						<span></span>
					</div>


					<HeaderMenu />

				</div>
			</div>
		</header>
	);
};

export default Header;
