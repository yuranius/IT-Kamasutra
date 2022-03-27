import Header_menu from "./Header_menu";
import logo from "../image/many.webp";
let Header = () => {
	return (
		<header className='header'>
			<div className='conteiner'>
				<div className='header__body'>
					<a href='#' className='header__logo'>
						<img src={logo} alt='logo' />
					</a>
					<div className='header__burger'>
						<span></span>
					</div>
					<Header_menu />
				</div>
			</div>
		</header>
	);
};

export default Header;
