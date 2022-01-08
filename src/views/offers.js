import {useEffect} from "react";
import {useLocation} from "react-router";

function Offers(props) {

    const location = useLocation();
    console.log(location.search.slice(1, location.search.length));

    useEffect(() => {
        getOffers(location.search.slice(1, location.search.length));
    }, [])

    return <h2>Offers</h2>;
}

export default Offers;
