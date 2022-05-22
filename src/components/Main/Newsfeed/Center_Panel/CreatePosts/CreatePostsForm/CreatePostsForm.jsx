import React from "react";
import scss from "./CreatePostsForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
	massage: Yup.string()
		.min(2, "Слишком мало!")
		.max(150, "Это даже я не прочитаю!")
		.required("Ошибка!!!")
});



let CreatePostForm = (props) => {
	return (
		<Formik
			initialValues={{ massage: "" }}
			validate={(values) => {
				const errors = {};
				if (!values.massage) {
					errors.massage = "Введи сначала сообщение";
				}
				return errors;
			}}

			validationSchema={SignupSchema}

			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					// alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
				props.addPost(values.massage);
				values.massage = "";
			}}
		>
			{({ isSubmitting, errors, touched }) => (
				<Form>
					<button className={scss["create-post__button"]} disabled={isSubmitting} type="submit">
						<i className="icon-create"></i>
						<div className={scss["create-post__button-text"]}>Create Post</div>
					</button>

					<div className={scss["create-post__form"]}>
						<figure className={scss["create-post__ava"]}>
							<img src="http://sociala.uitheme.net/assets/images/user-8.png" alt="" />
						</figure>
						<div className={scss["create-post__error"]}>
							<ErrorMessage name="massage" />
						</div>
						<Field as="textarea" id="massage" type="text" name="massage" className={scss["create-post__area" + (errors.massage && touched.massage ? "-invalid" : "")]} cols="30" rows="10" placeholder="О чем ты думаешь?" />
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default CreatePostForm;
