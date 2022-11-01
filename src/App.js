import Notification from './Components/Notification/Notification';
import {data} from "../src/Components/Data/data"
import './App.css';
import { useState } from 'react';

function App() {
  const [read, isRead] = useState(false);
  const handleClick= ()=>{
      isRead(true)
  }
  return (
    
    <div className="App">
      <div className='contentHeading'>
        <p className='heading'>Notifications</p>
        <p className="activity" onClick={handleClick}>Mark all as read</p>
      </div>
      {data.map((Data, index)=>{
        return <Notification images={Data.image} key={index} name={Data.name} message={Data.message} activity={Data.activity} time={Data.time} group={Data.group} isRead={Data.isRead}/>
      })}
      </div>
  );
}

export default App;
