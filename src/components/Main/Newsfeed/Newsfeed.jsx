import "./Newsfeed.scss";
// import RightPanel from "./Right_Panel/RightPanel";
import CenterPanelConteiner from "./Center_Panel/CenterPanelContainer";
import { Component } from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class Newsfeed extends Component {

   

	render() {

		return (
			<div>
				<div className="posts">
					<div className="posts__block">
						<CenterPanelConteiner />
						{/* <RightPanel /> */}
					</div>
				</div>
			</div>
		);
	}
}

let withNewsfeedAuthRedirect = withAuthRedirect(Newsfeed);


export default withNewsfeedAuthRedirect;
