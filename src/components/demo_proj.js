import React,{useState,useEffect} from 'react';
import axios from 'axios';
const DB = require('../mongoose_connect')
const server = require('../server')

function Frontend(){
    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://127.0.0.1:3000/fetch_joke')
    .then(res =>{
        const fetched_data = res.data;
        console.log(fetched_data);
    })
    .catch((error)=>{
        console.log("Something went wrong");
    })

  return(
    <div>
        <h1>Hello Welcome to my Website</h1>
    </div>
  )
});
}

export default Frontend