import Notification from './Components/Notification/Notification';
import image1 from "../src/images/avatar-mark-webber.webp";
import image2 from "../src/images/avatar-angela-gray.webp";
import image3 from "../src/images/avatar-jacob-thompson.webp";
import image4 from "../src/images/avatar-rizky-hasanuddin.webp";
import image5 from "../src/images/avatar-kimberly-smith.webp";
import image6 from "../src/images/avatar-nathan-peterson.webp";
import image7 from "../src/images/avatar-anna-kim.webp";
import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className='contentHeading'>
        <p className='heading'>Notifications</p>
        <p className="activity">Mark all as read</p>
      </div>
      <Notification images={image1} name={"Mark Webber "} message={"reacted to your recent post"} activity={" My first tournament today!"} time={"1 min ago"}/>
      <Notification images={image2} name={"Angela Gray "} message={"followed you"} time={"5 mins ago"}/>
      <Notification images={image3} name={"Jacon Thompson "} message={"has joined your group"} group={" Chess Group"} time={"1 day ago"}/>
      <Notification images={image4} name={"Rizky Hasanuddin "} message={"sent a private message"} time={"5 days ago"}/>
      <Notification images={image5} name={"Kimberly Smith "} message={"commented on your picture"} time={"1 week ago"}/>
      <Notification images={image6} name={"Nathan Peterson "} message={"reacted to your recent post"} activity={" 5 end-game stategies to increase your win rate"} time={"2 week ago"}/>
      <Notification images={image7} name={"Anna Kim "} message={"left the group"} group={" Chess Group"} time={"2 weeks ago"}/>
    </div>
  );
}

export default App;
