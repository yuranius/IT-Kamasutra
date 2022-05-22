import scss from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

let Login = (props) => {
	return (
		<div className={scss["main-wrap"]}>
			<div className={scss["nav-header"]}>
				<div className={scss["nav-header__btn"]}>
					<a href="/login" className={scss["nav-header__btn-login"]}>
						Логин
					</a>
					<a href="/register" className={scss["nav-header__btn-register"]}>
						Регистрация
					</a>
				</div>
			</div>
			<div className={scss["row"]}>
				<div className={scss["row__wrapper"]}>
					<div className={scss["card"]}>
						<div className={scss["card__body"]}>
							<h2 className={scss["card__title"]}>
								Войти  <br />
								в свой аккаунт
							</h2>
							<LoginForm postLogin={props.postLogin}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Login;
