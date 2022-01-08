import {useHistory, useLocation} from "react-router";
import {logout} from "../redux/actions/user.actions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getOfferDetails} from "../services/services";

function OfferDetails({user, logout}) {
    const history = useHistory();
    const location = useLocation();

    const offerId = location.search.split("=")[1];

    const goBack = () => {
        history.push({
            pathname: '/offers',
            search: `?venue=${offerdetails.venueid}`,  // query string
        });
    }

    const [offerdetails, setOfferDetails] = useState({});

    useEffect(() => {
        getOfferDetails((offerId))
            .then((response) => {console.log(response); setOfferDetails(response)})
    }, [])
    //console.log(offerdetails)

    return (
        <>
            <h2>Offer {offerId} Details</h2>
            <p>Amount: {offerdetails.amount}</p>
            <p>Date: {offerdetails.date}</p>
            <button onClick={logout}>Log out</button>
            <button onClick={goBack}>Back</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
