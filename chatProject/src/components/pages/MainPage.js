import GoChatRoom from "../GoChatRoom"
import "../../styles/chat.css";
import NicknameInput from "../NameColort";
export default function MainPage(){
    return(<>
    <div className="room-box">
        <NicknameInput/>
        <GoChatRoom color="#C549F9" link="1"/>
        <GoChatRoom color="#F9E749" link="2"/>
        <GoChatRoom color="#C549F9" link="3"/>
    </div>
        
     
    </>)
}