import React, { useState, useEffect } from "react";
import scss from "./ProfileStatus.module.scss";

let ProfileStatusWithHooks = (props) => {
	//! ----------------важно------------------------- не Удалять-------------
	// 🚧 let stateWithSetState = useState(true); // используем Hook
	// 🚧 let editMode = stateWithSetState[0]; // используем Hook
	// 🚧 let setEditMode = stateWithSetState[1]; // используем Hook

	// 🚧  let arr = [0, ()=>{}]; // деструктурирование массива 
	// 🚧  let [a, setA] = arr; // деструктурирование массива 

	// 🌻 С помощью деструктуризации можно useState использовать следующим образом: 🌻
	//! ----------------важно------------------------- не Удалять-------------

	let [editMode, setEditMode] = useState(false); //? устанавливаем значение editMode в false
	let [status, setStatus] = useState(props.status);

	useEffect(()=>{ //? пeрерисовывет компоненту когда меняется props.status
		setStatus(props.status);
	}, [props.status]);

	const activateEditeMode = () => {
		setEditMode(true); //? меняем значение editMode в true
	};

	const deactivateEditeMode = () => {
		props.updateStatus(status);
		setEditMode(false);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
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
					<input autoFocus={true} type="text" onChange={onStatusChange} onBlur={deactivateEditeMode}  placeholder="Введи свой статус" value={status} />
				</div>
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
