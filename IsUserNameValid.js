import React from 'react';
import PropTypes from 'prop-types';

export default function IsUserNameValid(props) {
	const {text, array, length}=props;
	let lengthText="";
	let lengthTextColor="";
	let originalText="";
	let originalTextColor="";
	for(var i=0; i<array.length; i++){
        if(text==array[i]||text==''){
        	originalText="Please enter an orginal username";
        	originalTextColor="red";
        	break;
        }
        else{
        	originalText="Username is original.";
        	originalTextColor="green";
        }
	}
	if(text.length>=length){
      lengthText="Username long enough";
      lengthTextColor="green";
	}
	else{
		lengthText="Please make sure your username is at least "+length+" characters";
		lengthTextColor="red";
	}
	return(
      <div>
      <div style={{color:originalTextColor}}>{originalText}</div>
      <div style={{color:lengthTextColor}}>{lengthText}</div>
      </div>
		);
}
IsUserNameValid.propTypes={
	text: PropTypes.string.isRequired,
	array: PropTypes.array.isRequired,
	length: PropTypes.number.isRequired
}