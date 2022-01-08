import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {getOffers} from "../services/services";
import Offer from "../components/offer";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../redux/actions/user.actions"

function Offers({user, logout}) {
    const location = useLocation();
    const history = useHistory();

    const idBusiness = location.search.split("=")[1];

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        if (user.token === '')
            history.push('/');
    }, [user])

    useEffect(() => {
        getOffers(idBusiness)
            .then(response => {setOffers(response);});
    }, [])

    console.log(offers);

    return (
        <>
            <h2>Offers</h2>
            {offers.map((offer) => {
                return <Offer offer={offer} />
            })}
            <button onClick={logout}>Log out</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
