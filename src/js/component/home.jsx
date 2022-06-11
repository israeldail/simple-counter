import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClock } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { number } from "prop-types";
import PropTypes from 'prop-types';
//include images into your bundle


//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar"><FontAwesomeIcon icon={faClock}/></div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
			
		</div>
	);
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
}
let counter = 0;
setInterval(function(){
	const four = Math.floor(counter/1000)
	const three = Math.floor(counter/100)
	const two = Math.floor(counter/10)
	const one = Math.floor(counter/1)
	counter++;
	console.log(one,two,three,four)
	
	ReactDOM.render(
	<SimpleCounter digitFour={four} digitThree={three} digitTwo={two} digitOne={one}  />,
	document.querySelector('#app')

)
},1000)



export default SimpleCounter;
