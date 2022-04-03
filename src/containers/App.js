import axios from 'axios'
import React, { useEffect, useState } from 'react';
import CardDetail from "../components/CardDetail";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import { StyleP } from "../styles/StyleP";
import { url } from '../helpers/urlJson';
import Approuters from '../routers/Approuters';

function App() {
  const [dataOrigin, setDataOrigin] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(url)
      .then(response => {
        setDataOrigin(response.data)
        setData(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const searchName = (searchText) => {
    const result = dataOrigin.filter((elem) => elem.title.toLowerCase().includes(searchText.toLowerCase()))
    setData(result)
  }

  const onSendTime = (getTime) => {
    const result = dataOrigin.filter((elem) => new Date(elem.date).getTime() === getTime)
    setData(result)
  }

  const restartData = () => {
    getData()
  }

  return (
    <div className="App">
      <Approuters/>
      <StyleP>
        
        <Filter onSearchName={searchName} restartData={restartData}/>
        <div>
        <Navbar data={dataOrigin} onSendTime={onSendTime} />
        
        <Cards data={data}/>
        </div>  
      </StyleP>
    </div>
  );
}

export default App;
