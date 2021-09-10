import React from 'react';
import API from '../utils/api.js';
import Table from './table.js';
import Title from './title.js';
import Input from './input.js';


class Filters extends React.Component {

    state = {
        sortChoice: '',
        filterChoice: '',
        results: [],
        baseResults: []
    };

    componentDidMount() {
        this.searchAPI("&results=30")
    }

    searchAPI = data => {
        API.search(data)
        .then(res => {
            this.setState({results: res.data.results, baseResults: res.data.results})
        })
        .catch(err => console.log(err))
    }

    handleSortChange = e => {
        console.log('sort function')
        const value = e.target.value
        this.setState({
            sortChoice: value, 
        })
        this.sortData(e.target.value);

        if (this.state.filterChoice===''){
            return
        } else {
            this.filterData(this.state.filterChoice, this.state.results)
        }
    };
    
    handleFilterChange = e => {
        console.log('filter function')
        const filterValue = e.target.value
        this.setState({
            filterChoice: filterValue,
        })
        this.filterData(e.target.value, this.state.baseResults)

        if (this.state.sortChoice==='') {
            return
        } else {
            this.sortData(this.state.sortChoice)
        }
    }

    sortData(e) {
        console.log('sortData fuction called')
        this.state.results.sort(function(a,b) {
            if(e==='last') {
                if (a.name.last > b.name.last) {
                    return 1
                } else if (a.name.last < b.name.last) {
                    return -1
                } return 0;
            } else if (e==='country') {
                if (a.location.state > b.location.state) {
                    return 1
                } else if (a.location.state < b.location.state) {
                    return -1
                }  return 0
            } else {
                console.log('sort by email')
                if (a[e] > b[e]) {
                    return 1
                } else if (a[e] < b[e]) {
                    return -1
                }  return 0
            }
        })
        console.log(this.state.results)
    }

    filterData(e, results) {
        console.log('filterData function called')
        if (e==='age 20-40') {
            const filteredArray = results.filter(age => age.dob === (age.dob < 41))
            this.setState({results: filteredArray})
        } else if (e==='age 41-60') {
            const filteredArray = results.filter(age => age.dob === (age.dob > 40))
            this.setState({results: filteredArray})
        } else {
            console.log(results)
            this.setState({results: this.state.baseResults})
        }
    }

    render() {
        console.log(this.state.results)
        return (
            <div>
              <Title />
              <Input handleSortChange={this.handleSortChange} handleFilterChange={this.handleFilterChange}/>
              <Table results={this.state.results}/>
            </div>
        );

    }
}

export default Filters;