import React,{useEffect,useState} from "react";
import axios from "axios";
function PostList(){
  const[Text,setText] = useState('')
  const[arr,setarr] = useState([])
  const clickhandler=(punchline)=>{
    const newWindow = window.open('','_blank');
    newWindow.document.write(punchline);
    newWindow.document.close();
  }
  const fetch_Joke=()=>{
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(res=>{
      console.log(res.data)
      setarr(prevJoke=>[...prevJoke,res.data])
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetch_Joke();
    const interval = setInterval(()=>{
      fetch_Joke()
    },10000)

    return ()=>{
      clearInterval();
    }
  })
  return(
    <div>
      <h1>Hello everyone</h1>
      <h2>Welcome to my Website</h2>
      <div className='post-list'>
        {arr.map((joke, idx) => (
          <div key={idx} className='card-content' id='post-card'>
            <h3>{joke.setup}</h3>
            <button onClick={() => clickhandler(joke.punchline)}>Punchline</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList;
