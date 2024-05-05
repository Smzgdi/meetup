import NewMeetupForm from "../components/layout/Meetup/NewMeetupForm";
import { useNavigate } from "react-router-dom";
const NewMeetup = () => {
  const navigate = useNavigate();

  function onaddmeetuphandler(meetupdata) {
    fetch(
      "https://meetup-react-f9395-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST", //Method set to post since default is get
        body: JSON.stringify(meetupdata), //Convert the data in JSON format which is the format for most backends
        headers: { "Content-Type": "application/json" }, //Make it clear to the request that it carries JSON data
      }
    ) .then(() => {navigate("/", {replace:true});});
    //Default JS function that allows us to send http get requests to the database \
    //Added meetup.json which basically creates another table and stores it there like creating a folder
    //In the second step I need to send a post request since get is already sent and a post request to store that data in DB
  } 
  return (
    <div>
      <p>Add new meetup</p>
      <NewMeetupForm onAddmeetup={onaddmeetuphandler} />
    </div>
  );
};

export default NewMeetup;
