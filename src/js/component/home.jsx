import React from "react";
import {useState} from "react"



	
//create your first component

const TrafficLight = (props) => {
	let colors=["redlit","yellowlit","greenlit"];

	const [trafficColor, setTrafficColor] = useState(null);

	const redClick=()=>{
		setTrafficColor("redlit")
	}	
	const yellowClick=()=>{
		setTrafficColor ("yellowlit")
	}
	const greenClick=()=>{
		setTrafficColor("greenlit");
	}
	return (
			<><div className="hanger"></div>
			<div className="bigBox">
				<div className="redLight" onClick ={redClick}>{trafficColor}
				</div>
				<div className="yellowLight" onClick={yellowClick}>{trafficColor}
				</div>
				<div className="greenLight" onClick={greenClick}>{trafficColor}
				</div>
			</div></>
	);
};

export default TrafficLight;
