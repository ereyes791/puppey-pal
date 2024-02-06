import { useState } from 'react'

import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(featPupId) {
    // some logic here
    featPupId = puppies.find((pup)=> pup.id === featPupId)
    console.log("clicked");
  }
  console.log("puppyList: ", puppyList);

  return (
    <>
      <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={handleClick(puppy)} key={puppy.id}>{puppy.name}</p>;
           })
       }
      </div>
      {featPupId && (
        <div>
          <h2>{featPupId.name}</h2>
          <ul>
            <li>Age: {featPupId.age}</li>
            <li>Email: {featPupId.email}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default App
