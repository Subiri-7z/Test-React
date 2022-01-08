import {useHistory} from "react-router-dom";

function Venue({venue}) {
    const history = useHistory();
    const listOffers = () => {
        history.push({
            pathname: '/offers',
            search: `?offer=${venue.id}`,  // query string
        });
    }

    return (
        <div>
            <h4>{venue.title}</h4>
            <p>{venue.description}</p>
            <p>Price: {venue.price}</p>
            <button onClick={listOffers}>See Offers</button>
        </div>
    );
}

export default Venue
