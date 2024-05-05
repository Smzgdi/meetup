import MeetupItem from "./MeetupItem"
import "./MeetupList.css"

const MeetupList = (props) => {
  return (
    <ul className="list">
        {props.meetups.map(meetup =>
        <MeetupItem 
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        description={meetup.description}
        address = {meetup.address} />)} 
    </ul>
  )
}

export default MeetupList
