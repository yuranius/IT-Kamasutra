import { NavLink } from "react-router-dom";
import scss from "./HeaderLogin.module.scss";

let HeaderLogin = (props) => {
   return <div className={scss["header-login"]}>
   	{props.isAuth
   		? <div className={scss["header-login__auth"]}>Добрый день, <span>{props.login}</span> !</div>
		: <NavLink to='/login'> Login </NavLink>}
	</div>;
};

export default HeaderLogin;
