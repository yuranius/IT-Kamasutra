import React, { Component } from "react";
import scss from "./ProfileStatus.module.scss";

class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditeMode = () => {
		// 🚧 можно через стрелочноую фанкцию 🚧 🌻 🌻
		this.setState({
			editMode: true,
		});
	};

	deactivateReaction = () => {
		this.props.updateStatus(this.state.status);
		this.setState({
			editMode: false,
		});
	};
	deactivateEditeMode = () => {
		this.deactivateReaction();
	};

	pressEnter = (terget) => {
		if (terget.charCode === 13) {
			this.deactivateReaction();
		}
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.target.value,
		});
	};

	componentDidUpdate(prevProps, prevState) { //? 🌻 🚧 при обновлении статуса в пропсах обновляем его в локальном стейте, для того что-бы статус браляс из пропсов каждый раз а не из предыдущего пользователя, когда он записался в локальный стейт 🚧 🌻 
		if (prevProps.status !== this.props.status) {
			this.setState({
			status: this.props.status,
		});
		}
	}

	render() {
		return (
			<div className={scss["body__status"]}>
				{!this.state.editMode && (
					<div className={scss["body__status-text"]}>
						<span onClick={this.props.profile.userId == this.props.userIdAuth ? this.activateEditeMode : null}>{this.props.status || "Стутус не добавлен"}</span>
					</div>
				)}
				{this.state.editMode && (
					<div className={scss["body__status-input"]}>
						<input 
						autoFocus={true} 
						onBlur={this.deactivateEditeMode} 
						type="text" value={this.status} 
						placeholder="Введи свой статус" 
						onChange={this.onStatusChange} 
						onKeyPress={this.pressEnter} />
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
