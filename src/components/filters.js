import React from "react";
import Employee from "./generator";

function AgeFilter() {
    const items = [];
    const result = items.filter(items => items.dob.age >= 20 && <= 30)
}

export default AgeFilter;