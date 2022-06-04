import React from "react";
import scss from "./FindUsersPages.module.scss";


let FindUsersPages = (props) => {

   return(

		<span
			key={props.id}
			onClick={() => {
				props.onPageChanged(props.id);
			}}
			className={props.currentPage === props.id ? scss["namber-page__page-active"] : scss["namber-page__page"]}
		>
			{props.id}
		</span>
   )

};

export default FindUsersPages;
