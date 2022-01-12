import {useHistory} from "react-router-dom";

function Venue({venue}) {
  const history = useHistory();
  const listOffers = () => {
    history.push({
      pathname: '/offers',
      search: `?venue=${venue.id}`,  // query string
    });
  }
  return (
    <div>
      <h3>{venue.name}</h3>
      <p><b>Address: </b>{venue.address}</p>
      <p>{venue.latitude} {venue.longitude}</p>
      <p><b>Opening time: </b>{venue.openingTime}</p>
      <p><b>Closing time:</b> {venue.closingTime}</p>
      <button onClick={listOffers}>See Offers</button>
    </div>
  );
}

export default Venue
