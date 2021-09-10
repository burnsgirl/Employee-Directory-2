import React from 'react';



    function Table (props) {

        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Employee</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>City</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((employee, index) => 
                        

                                <tr key = {index}>
                                    <td scope='row' data-label='Employee'><img src={employee.picture.large} class="img-thumbnail" alt={employee.name.first}></img></td>
                                    <td data-label='First'>{employee.name.first}</td>
                                    <td data-label='Last'>{employee.name.last}</td>
                                    <td data-label='Email'>{employee.email}</td>
                                    <td data-label='Age'>{employee.dob.age}</td>
                                    <td data-label='City'>{employee.location.city}, {employee.location.state}</td>

                                </tr>

                    )}
                </tbody>
            </table>
            
        )

    }
    

export default Table;
