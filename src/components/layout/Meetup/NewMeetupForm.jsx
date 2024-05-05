import "./NewMeetUpForm.css";
import Card from "../ui/Card";
import React from "react";
import { useRef } from "react";
import NewMeetup from "../../../pages/NewMeetup";

const NewMeetupForm = (props) => {
  const titleinputref = useRef();
  const imageinputref = useRef();
  const addressinputref = useRef();
  const descinputref = useRef();

  function submithandler(event) {
    event.preventDefault();

    const enteredtitle = titleinputref.current.value;
    const enteredimg = imageinputref.current.value;
    const enteredaddr = addressinputref.current.value;
    const entereddesc = descinputref.current.value;

    const meetupdata = {
      title: enteredtitle,
      img: enteredimg,
      addr: enteredaddr,
      desc: entereddesc,
    };
    props.onAddmeetup(meetupdata)
  }
  return (
    <Card>
      <form className="form" onSubmit={submithandler}>
        <div className="control">
          <label htmlFor="title"> Meetup Title</label>
          <input type="text" required id="title" ref={titleinputref} />
        </div>
        <div className="control">
          <label htmlFor="address"> Meetup image</label>
          <input type="url" required id="image" ref={imageinputref} />
        </div>
        <div className="control">
          <label htmlFor="Address"> Address</label>
          <input type="text" required id="title" ref={addressinputref} />
        </div>
        <div className="control">
          <label htmlFor="description"> Description</label>
          <textarea id="description" rows="5" ref={descinputref}></textarea>
        </div>
        <div className="actions">

        <button > Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
