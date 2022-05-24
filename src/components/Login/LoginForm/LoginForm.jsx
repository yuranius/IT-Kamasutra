import { Formik, Form, Field, ErrorMessage } from "formik";
import scss from "./LoginForm.module.scss";





let LoginForm = (props) => {
	return (
		<Formik
			initialValues={{ email: "", password: "" , checkbox:false }}
			validate={(values) => {
				const errors = {};

				if (!values.email) {
					errors.email = "Обязательное поле";
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = "Некорректный адрес";
				}

				return errors;
			}}
			onSubmit={(values,  { setSubmitting }) => {
				// setTimeout(() => {
				// 	// alert(JSON.stringify(values, null, 2));
				// 	// console.log(JSON.stringify(values, null, 2));
				// 	props.postLogin(values.email, values.password, values.checkbox, true);
				// 	setSubmitting(false);
				// }, 400);
				props.state.login(values.email, values.password, values.checkbox, true);
				setSubmitting(false);
				
			}}
		>
			{({ isSubmitting, errors, touched }) => (
				<Form>
					<div className={scss["card__form"]}>
						<Field type="email" name={"email"} 
						className={scss["card__input" + (errors.email && touched.email ? "-invalid" : "")]} 
						placeholder="💥 Ваш электронный адрес" />
						<i className="/"></i>
						<div className={scss["card__input-error"]}>
							<ErrorMessage name="email" />
							
						</div>
					</div>

					<div className="card__form">
						<Field type="password" name={"password"} 
						className={scss["card__input" + (errors.massage && touched.massage ? "-invalid" : "")]} 
						placeholder="💫 Пароль" />
						<i className="/"></i>
						
					</div>
					<span className={scss["card__message-error"]}>{props.state.messages}</span>
					<div className={scss["card__check"]}>
						<Field type="checkbox" name={"checkbox"} 
						className={scss["card__check-input"]} 
							
						/>
						<label className={scss["card__check-label"]}>Запомнить меня</label>
						<a href="/forgot" className={scss["card__forgot"]}>
							Забыли пароль?
						</a>
					</div>
					
					<div className={scss["card__footer"]}>
						<button type="submit" disabled={isSubmitting} className={scss["footer__button"]}>
							Логин
						</button>
						<h6 className={scss["footer__text"]}>
							Нет учетной записи{" "}
							<a href="/register" className={scss["footer__text-link"]}>
								Регистрация
							</a>
						</h6>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
