import React from 'react';
import InputInfo from './inputinfo';



function Input(props) {
    return (
        <div>
            <InputInfo onChange={props.handleSortChange} 
            type='sort' 
            defaultVal='' defaultDesc='Select Sort Order' 
            val1='last' val1Desc='Last Name' 
            val2='country' val2Desc='Country'/>
            <InputInfo onChange={props.handleFilterChange} 
            type='filter' 
            defaultVal='' defaultDesc='Select Age Range' 
            val1='yage' val1Desc='Ages 20-40' 
            val2='oage' val2Desc='Ages 41-60'/>
        </div>
    )
}

export default Input;