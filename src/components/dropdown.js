import React from "react";
import Employee from "./generator";


function Dropdown() {
    const handleClick (e, items) {
        console.log(`${items}`)
    }
    return (
    //     <div class="dropdown">
    // <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //     Sort by
    // </button>
    // <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //     <a class="dropdown-item" href="#">Country</a>
    //     <a class="dropdown-item" href="#">Alphabetical order</a>
    // </div>
    // </div>
        <>
        <button onClick={(e) => handleClick(e, {items.location.state})}>Country</button>
        <button onClick={(e) => handleClick(e, {items.dob.age})}>Age</button>
        </>
    )
}

export default Dropdown;
