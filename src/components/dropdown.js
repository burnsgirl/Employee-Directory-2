import React from "react";
import Employee from "./generator";

function Dropdown(props) {
    return (
        <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort by
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Country</a>
        <a class="dropdown-item" href="#">Alphabetical order</a>
    </div>
    </div>
    )
}

export default Dropdown;
