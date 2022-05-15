import React, { Component, Fragment } from "react";
import scss from './Login.module.scss'

class Login extends Component {
	render() {
		return (
			<Fragment>
				<div className={scss["main-wrap"]}>
					<div className={scss['nav-header']}>
						<div className={scss['nav-header__btn']}>
							<a href="/login" className={scss["nav-header__btn-login"]}>
								Login
							</a>
							<a href="/register" className={scss["nav-header__btn-register"]}>
								Register
							</a>
						</div>
					</div>
					<div className={scss["row"]}>
						<div className={scss["row__wrapper"]}>
							<div className={scss["card"]}>
								<div className={scss["card__body"]}>
									<h2 className={scss["card__title"]}>
										Login into <br />
										your account
									</h2>
									<form>
										<div className={scss["card__form"]}>
											<i className="/"></i>
											<input type="text" className={scss['card__input']} placeholder="Your Email Address" />
										</div>
										<div className="card__form">
											<input type="Password" className={scss['card__input']}  placeholder="Password" />
											<i className="/"></i>
										</div>
										<div className={scss["card__check"]}>
											<input type="checkbox" className={scss["card__check-input"]} id="exampleCheck" />
											<label className={scss["card__check-label"]}>Remember me</label>
											<a href="/forgot" className={scss["card__forgot"]}>
												Forgot your Password?
											</a>
										</div>
									</form>

									<div className={scss["card__footer"]}>
										<div className={scss["footer__button"]}>
											<a href="#" className={scss["footer__button-link"]}>
												Login
											</a>
										</div>
										<h6 className={scss["footer__text"]}>
											Dont have account{" "}
											<a href="/register" className={scss["footer__text-link"]}>
												Register
											</a>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Login;
