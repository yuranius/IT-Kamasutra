import React from "react";
import scss from "./ProfileCardFree.module.scss";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "./../../../../image/user-img.webp"


let ProfileCardThree = (props) => {
	return (
		<div className={scss["profile-card"]}>
			<div className={scss["profile-card__header"]}>
				<img src="https://krym-portal.ru/wp-content/uploads/2016/02/krym-otdyh-2016-ceny.jpg" alt="avater" />
			</div>
			<div className={scss["profile-card__body"]}>
				<figure className={scss["body__avatar"]}>
					<img src={props.profile.photos.large || userPhoto} alt="avater" />
				</figure>
				<h4 className={scss["body__name"]}>
					{props.profile.fullName}
					<span>{`Пользователь Id-${props.profile.userId}`}</span>
				</h4>
				<ProfileStatusWithHooks userIdAuth={props.userIdAuth} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
				<div className={scss["body__link"]}>
				{props.userIdAuth === props.profile.userId && 
				    <>
					<a href="/" className={scss["body__link-friend"]}>
						Add Foto
						
					</a>
					<input type={"file"} placeholder='true'/>
					</>
					}

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
