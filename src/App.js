import Notification from './Components/Notification/Notification';
import { data } from "../src/Components/Data/data"
import './App.css';
import { useState } from 'react';

function App() {
  const [item, isItem] = useState(data);
  const handleClick= () =>{
      const newData = 
      data.map((datas)=>
      datas.isRead !== true ?
        {...datas, isRead:true } : datas
      )
     
      isItem(newData)
  }
  const markAsRead = (id) =>{
    const readArray = item.map((datas)=>
    // console.log(datas.id == id+1)
    (datas.id === id+1)?
      {...datas, isRead:true} : datas

  )
  console.log(data.name)
  isItem(readArray);
}
  return (
    
    <div className="App">
      <div className='contentHeading'>
        <p className='heading'>Notifications</p>
        <p className="activity" onClick={handleClick}>Mark all as read</p>
      </div>
      {item.map((Data, index)=>{
  return <Notification images={Data.image} key={index} name={Data.name} message={Data.message} activity={Data.activity} time={Data.time} group={Data.group} isRead={Data.isRead} markAsRead={markAsRead} id={index}/>
    })}
      </div>
  );
}

export default App;
