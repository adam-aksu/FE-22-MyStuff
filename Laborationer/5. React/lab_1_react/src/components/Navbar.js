// import React from 'react'
import { useState } from "react";

const Navbar = () => {
	
	// function changeText()
	// {	
	// 	if (document.getElementById("myButton").value=="ADAM")
	// 	{	document.getElementById("myButton").value = "Login";
	// 		console.log(document.getElementById("myButton").value);
	// 	}
	// 	else document.getElementById("myButton").value = "ADAM";
	// }

	const [buttonText, setButtonText] = useState("LOGIN");
	const changeButtonText = () => {
		setButtonText("ADAM")
	  }

  return (
    // <!--Navbar-->
    <nav className="nav-bar navbar-expand-lg pt-2 pb-2 bg-dark text-white mb-3">
		<button id='myButton' onClick={() => changeButtonText()} className='button btn btn-light'>{buttonText}</button>
		<h1>Mina bästa boktips</h1>
    </nav>
  )
}

export default Navbar