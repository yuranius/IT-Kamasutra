import React, {  useEffect, useState } from "react";
import scss from "./ProfileCardFree.module.scss";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "./../../../../image/user-img.webp";
import { setUsersProfile } from "../../../../redux/profileUsersReducer";

let ProfileCardThree = (props) => {


	let [photoIsAdded, setPhotoIsAdded] = useState(false);
	let [profilePhoto, setProfilePhoto] = useState(props.profile.photos.large)




	const onMainPhotoSelected = (e) => {
		if ( e.target.files.length ) {
			setPhotoIsAdded(true);
			props.savePhoto(e.target.files[0]);
		}
	}

	useEffect(()=>{
		setProfilePhoto(props.profile.photos.large);
		console.log('📢 [ProfileCardThree.jsx:24]', props.profile.photos.large);
		setPhotoIsAdded(false);
		
	},[props])



	return (
		<div className={scss["profile-card"]}>
			<div className={scss["profile-card__header"]}>
				<img src="https://krym-portal.ru/wp-content/uploads/2016/02/krym-otdyh-2016-ceny.jpg" alt="avater" />
			</div>

			<div className={scss["profile-card__body"]}>
				<figure className={scss["body__avatar"]}>
					<img src={profilePhoto || userPhoto} alt="avater" />
				</figure>
				<h4 className={scss["body__name"]}>
					{props.profile.fullName}
					<span>{`Пользователь Id-${props.profile.userId}`}</span>
					
				</h4>
				<ProfileStatusWithHooks userIdAuth={props.userIdAuth} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
				{props.userIdAuth === props.profile.userId && (
						<div className={scss["input__wrapper"]}>
							<input type={"file"} id="input__file" className={scss["input__file"]} onChange={onMainPhotoSelected} />
							<label  htmlFor="input__file" className={scss["input__file-button"]}>
								<span className={scss["input__file-icon-wrapper"]}>
									<i className="icon-workspaces_outline"></i>
								</span>
								<span className={scss["input__file-button-text"]}>{ !photoIsAdded ? 'Add foto' : 'Selected'}</span>
							</label>
						</div>
					)}
				<div className={scss["body__link"]}>

					<a href="/" className={scss["body__link-friend"]}>
						Add Friend
					</a>

					<a href="/" className={scss["body__link-mail"]}>
						<i className="icon-mark_as_unread"></i>
					</a>
					<a href="/" className={scss["body__link-dropdownmenu"]}>
						<i className="icon-workspaces_outline"></i>
					</a>
				</div>
			</div>

			<div className={scss["profile-card__menu"]}>
				<ul className={scss["menu__list"]} id="pills-tab" role="tablist">
					<li className={scss["menu__item"]}>
						<a className={scss["menu__link"]} href="#navtabs1">
							About
						</a>
					</li>
					<li className={scss["menu__item"]}>
						<a className={scss["menu__link"]} href="#navtabs2">
							Membership
						</a>
					</li>
					<li className={scss["menu__item"]}>
						<a className={scss["menu__link"]} href="#navtabs3">
							Discussion
						</a>
					</li>
					<li className={scss["menu__item"]}>
						<a className={scss["menu__link"]} href="#navtabs4">
							Video
						</a>
					</li>
					<li className={scss["menu__item"]}>
						<a className={scss["menu__link"]} href="#navtabs3">
							Group
						</a>
					</li>
					<li className={scss["menu__item"]}>
						<a className={scss["menu__link"]} href="#navtabs1">
							Events
						</a>
					</li>
					<li className={scss["menu__item"]}>
						<a className={scss["menu__link"]} href="#navtabs7">
							Media
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileCardThree;
