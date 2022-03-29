import HeaderMenu from "./Header-menu";
import logo from "./many.webp";
import style from "./Header.scss";

let Header = () => {
	return (
		<header className='header'>
			<div className='conteiner'>
				<div className='header__body'>

					<a href='/' className='header__logo'>
						<img src={logo} alt='logo' />
					</a>
					<div className='header__burger'>
						<span></span>
					</div>
					<HeaderMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;
