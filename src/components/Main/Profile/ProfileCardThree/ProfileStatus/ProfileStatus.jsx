import React, { Component } from "react";
import scss from "./ProfileStatus.module.scss";

class ProfileStatus extends Component {
	state = {
		editMode: false,
	};

	activateEditeMode = () => { // 🚧 можно через стрелочноую фанкцию 🚧
		this.setState({
			editMode: true,
		});
	}

	deactivateEditeMode() {
		this.setState({
			editMode: false,
		});
	}

	render() {
		return (
			<div className={scss["body__status"]}> 
				{!this.state.editMode && (
					<div className={scss["body__status-text"]}>
						<span onClick={this.activateEditeMode}>{this.props.props}</span>
					</div>
				)}
				{this.state.editMode && (
					<div className={scss["body__status-input"]}>
						<input autoFocus={true} onBlur={ this.deactivateEditeMode.bind(this) } type="text" value={this.props.status} placeholder="Напиши" />
					</div>
				)}
			</div>
		);
	}
}



export default ProfileStatus;
