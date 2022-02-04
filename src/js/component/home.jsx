import React from "react";
import { useState } from "react";

//After looking at the class recording on 2/2 I set it to where clicking on one light causes the next one to shine
export const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<>
			<div className="trafficlight">
				<div
					className={color == "red" ? "redlit" : "red"}
					onClick={() => setColor("yellow")}></div>
				<div
					className={color == "yellow" ? "yellowlit" : "yellow"}
					onClick={() => setColor("green")}></div>
				<div
					className={color == "green" ? "greenlit" : "green"}
					onClick={() => setColor("red")}></div>
			</div>
		</>
	);
};


