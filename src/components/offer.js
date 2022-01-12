import {useHistory} from "react-router-dom";

function Offer({offer}) {
  const history = useHistory();

  const seeOfferDetails = () => {
    history.push({
      pathname: '/offerdetails',
      search: `?offer=${offer.id}`,  // query string
    });
  }

  return (
    <div>
      <h3>{offer.title}</h3>
      <p>Description: {offer.description}</p>
      <small>{offer.detail}</small>
      <p>Price: {offer.price}</p>
      <button onClick={seeOfferDetails}>See Offer Details</button>
    </div>
  );
}

export default Offer
