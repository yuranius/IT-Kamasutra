import React from "react";
import scss from "./Paginator.module.scss";


let Paginator = (props) => {
	console.log('📢 [Paginator.jsx:6]', props);

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
 
	for (let index = 1; index <= pagesCount; index++) {
	   pages.push(index);
	}


	// let pagesElement = pages.map( ( p ) => (
	// 	<FindUsersPages 
	// 	id = { p }
	// 	key = { p.toString() } 
	// 	onPageChanged= { props.onPageChanged }
	// 	currentPage = { props.currentPage }
	// 	/>
	//  ));

   return (
	   <> 
		{ pages.map( ( p ) => {
			return (
		<span
			key={p.id}
			onClick={() => {
				props.onPageChanged(p.id);
			}}
			className={props.currentPage === p.id ? scss["namber-page__page-active"] : scss["namber-page__page"]}
		>
			{p.id}
		</span>
			)})
		}
		</>
   )

};

export default Paginator;
