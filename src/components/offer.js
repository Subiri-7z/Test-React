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
            <h4>{offer.user.name}</h4>
            <p>Amount: {offer.amount}</p>
            <p>Date: {offer.date}</p>
            <button onClick={seeOfferDetails}>See Offer Details</button>
        </div>
    );
}

export default Offer
