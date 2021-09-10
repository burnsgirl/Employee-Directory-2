import React, { Component } from "react";
import React from "react";
import Table from "./table.js";
import Api from "./utils/api";

class Filter extends Component {

    state = {
        sortChoice: '',
        filterChoice: '',
        results: [],
        baseResults: []
    };

    componentDidMount() {
        this.searchApi("&results=30");
    };

    searchApi = data => {
        Api.search(data)
        .then(res => {
            this.setState({results: res.data.results, baseResults: res.data.results})
        })
        .catch(err => console.log(err))
    };

    handleSortChange = e => {
        console.log('sort function');
        const value = e.target.value;
        this.setState({
            sortChoice: value, 
        })
        this.sortData(e.target.value);

        
        if (this.state.filterChoice===''){
            return;
        } else {
            this.filterData(this.state.filterChoice, this.state.results);
        }
    };
    
}

export default Filter;