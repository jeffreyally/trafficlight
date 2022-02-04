import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="trafficlight">
				<div className="red"></div>
				<div className="yellow"></div>
				<div className="green"></div>
			</div>
		</>
	);
};

export default Home;

//fix the height and width of each of the divs with the colors and add border radius and box shadow I believe
