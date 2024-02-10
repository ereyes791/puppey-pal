import { useState } from 'react'

import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(featPupId) {
    // some logic here
    console.log("featPupId: ", featPupId);
    setFeatPupId(puppies.find((pup)=> pup.id === featPupId));
  }

  return (
    <>
      <div className="App">
      {
        puppies.map((puppy) => {
             return (
             <p onClick={()=>{ handleClick(puppy.id)}} 
                key={puppy.id}>
                  {puppy.name}
              </p>);
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
