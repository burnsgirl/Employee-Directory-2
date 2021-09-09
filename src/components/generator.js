import React, {Component} from 'react';

class Employee extends Component {

    constructor(props){
        super(props)
        this.state = {
            items:[],
            loading:false
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                items:res.results,
                loading:true
            })
        })
    }

    render() {
        var {items, loading} = this.state

        if(!loading) {
            return (
                <div>Loading...</div>
            )
        } else {

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
                    {items.map(items => (
                        

                                <tr>
                                    <td scope='row' data-label='Employee'><img src={items.picture.large} class="img-thumbnail" alt={items.name.first}></img></td>
                                    <td data-label='First'>{items.name.first}</td>
                                    <td data-label='Last'>{items.name.last}</td>
                                    <td data-label='Email'>{items.email}</td>
                                    <td data-label='Age'>{items.dob.age}</td>
                                    <td data-label='City'>{items.location.city}, {items.location.state}</td>

                                </tr>

                    ))}
                </tbody>
            </table>
            
        )

        }
    }
}

export default Employee;
