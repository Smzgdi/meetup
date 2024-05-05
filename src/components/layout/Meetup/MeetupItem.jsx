import "./MeetupItem.css";
import Card from "../ui/Card"
const MeetupItem = (props) => {
  return (
    <Card>
      <li className="item">
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
          <div className="action">
            <button>To Favourites</button>
          </div>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
