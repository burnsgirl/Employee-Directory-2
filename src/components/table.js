import React from 'react';
import '../styles/table.css';



    function Table (props) {

        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col' class="one">Employee</th>
                        <th scope='col' class="two">First</th>
                        <th scope='col'class="one">Last</th>
                        <th scope='col'class="two">Email</th>
                        <th scope='col'class="one">Age</th>
                        <th scope='col'class="two">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((employee, index) => 
                        

                                <tr key = {index}>
                                    <td scope='row' data-label='Employee' class="one"><img src={employee.picture.large} class="img-thumbnail" alt={employee.name.first}></img></td>
                                    <td data-label='First' class="two">{employee.name.first}</td>
                                    <td data-label='Last' class="one">{employee.name.last}</td>
                                    <td data-label='Email' class="two">{employee.email}</td>
                                    <td data-label='Age' class="one">{employee.dob.age}</td>
                                    <td data-label='Location' class="two">{employee.location.state}</td>

                                </tr>

                    )}
                </tbody>
            </table>
            
        )

    }
    

export default Table;
