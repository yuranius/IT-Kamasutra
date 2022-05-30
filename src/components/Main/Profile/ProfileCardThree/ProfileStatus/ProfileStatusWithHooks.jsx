import React, { useState } from "react";
import scss from "./ProfileStatus.module.scss";

let ProfileStatusWithHooks = (props) => {
	console.log('📢 [ProfileStatusWithHooks.jsx:5]', props);
	//! ----------------важно------------------------- не Удалять-------------
	// 🚧 let stateWithSetState = useState(true); // используем Hook
	// 🚧 let editMode = stateWithSetState[0]; // используем Hook
	// 🚧 let setEditMode = stateWithSetState[1]; // используем Hook

	// 🚧  let arr = [0, ()=>{}]; // деструктурирование массива 
	// 🚧  let [a, setA] = arr; // деструктурирование массива 

	// 🌻 С помощью деструктуризации можно useState использовать следующим образом: 🌻
	//! ----------------важно------------------------- не Удалять-------------

	let [editMode, setEditMode] = useState(false); //? устанавливаем значение editMode в false
	
	const activateEditeMode = () => {
		setEditMode(true); //? меняем значение editMode в true
	};

	let deactivateEditeMode = () => {
		props.updateStatus(props.status);
		setEditMode(false);
	};



	return (
		<div className={scss["body__status"]}>
			{!editMode && (
				<div className={scss["body__status-text"]}>
					<span onClick={activateEditeMode}>{props.status}</span>
				</div>
			)}
			{editMode && (
				<div className={scss["body__status-input"]}>
					<input autoFocus={true} type="text" onBlur={deactivateEditeMode}  placeholder="Введи свой статус"  />
				</div>
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
