import React from 'react'
import { Search } from 'react-bootstrap-icons'

const Filter = ({onSearchName,restartData}) => {
    const changeFilterName = (e) => {
        if(e.target.name === 'filterName'){
            let searchText = e.target.value
            onSearchName(searchText)
        }
    }

    // const clear = (e) => {
    //     if (restartData()){
    //         changeFilterName.reset()
    //     }
    // }

    return (
        <div>
            <div className='filDiv1'>
                <h2 className='filH2"'>Filters</h2>
                <button className='filBtn' onClick={() => restartData()}>Clear</button>
            </div>
            <div className='filDiv2'>
                <input className='filInput' type='text' name='filterName' onChange={changeFilterName}/>
                <Search className='search'/>
            </div>
        </div>
    )
}

export default Filter