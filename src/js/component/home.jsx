import React from "react";
import {useState} from "react";

//create your first component

const TrafficLight = () => {

	const [trafficColor, setTrafficColor] = useState("");
	const handleClick = (e)=>{
		e.preventDefault();
		setTimeout(()=>setTrafficColor("red"),1000);
		setTimeout(()=>setTrafficColor("yellow"),2000);
		setTimeout(()=>setTrafficColor("green"),3000);
		setTimeout(()=>setTrafficColor(""),4000);
	}

	const addPurple = (e) =>{
		e.preventDefault();
		let bigBox = document.querySelector(".bigBox")
		let purpleLight= document.createElement("div")
		
		purpleLight.classList.add("purpleLight")
		bigBox.appendChild(purpleLight)
		extraArea.appendChild(extraArea)
	}

	return (
			<><div className="hanger"></div>
			<div className="bigBox">
				<div className={"redLight " + (trafficColor=="red"?"redGlow":"")} onClick ={()=>setTrafficColor("red")}>
				</div>
				<div className={"yellowLight " + (trafficColor=="yellow"?"yellowGlow":"")}onClick={()=>setTrafficColor("yellow")}>
				</div>
				<div className={"greenLight " + (trafficColor=="green"?"greenGlow":"")}onClick={()=>setTrafficColor("green")}>
				</div>
				<button onClick={(e)=>handleClick(e)}>Cycle</button>
				<button onClick={(e)=>addPurple(e)}>Add Purple</button>
			</div></>
	);
};

export default TrafficLight;
