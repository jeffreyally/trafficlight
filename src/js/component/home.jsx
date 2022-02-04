import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<>
			<div className="trafficlight">
				<div
					className={color == "red" ? "redlit" : "red"}
					onClick={() => setColor("red")}></div>
				<div
					className={color == "yellow" ? "yellowlit" : "yellow"}
					onClick={() => setColor("yellow")}></div>
				<div
					className={color == "green" ? "greenlit" : "green"}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
};

export default Home;

//fix the height and width of each of the divs with the colors and add border radius and box shadow I believe
