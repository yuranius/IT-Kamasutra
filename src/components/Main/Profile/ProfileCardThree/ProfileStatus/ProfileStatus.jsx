import React, { Component } from "react";
import scss from "./ProfileStatus.module.scss";

class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status
	};

	activateEditeMode = () => { // 🚧 можно через стрелочноую фанкцию 🚧
		this.setState({
			editMode: true,
		});
		
	}

	deactivateEditeMode = () => {
		this.props.updateStatus(this.state.status);
		this.setState({
			editMode: false,
		});
		

	}

	onStatusChange = (e) => {
		this.setState({
			status: e.target.value
		});

	}

	render() {
		return (
			<div className={scss["body__status"]}> 
				{!this.state.editMode && (
					<div className={scss["body__status-text"]}>
						<span onClick={this.activateEditeMode}>{this.state.status ? this.state.status : 'Статус не обновлен' }</span>
					</div>
				)}
				{this.state.editMode && (
					<div className={scss["body__status-input"]}>
						<input 
						autoFocus={true} 
						onBlur={ this.deactivateEditeMode } 
						type="text" 
						value={this.status} 
						placeholder="Напиши" 
						onChange={this.onStatusChange}
						/>
					</div>
				)}
			</div>
		);
	}
}



export default ProfileStatus;
