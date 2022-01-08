import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../redux/actions/user.actions"
import {getVenues} from "../services/services"
import Venue from "../components/venue";

function Venues({user, logout}) {

    const history = useHistory();

    const [venues, setVenues] = useState([]);

    useEffect(() => {
        if (user.token === '')
            history.push('/');
    }, [user])

    useEffect(() => {
        getVenues()
            .then(response => {setVenues(response)});
    }, [])

    return (
        <>
            <h1>Venues</h1>
            {venues.map((venue) => {
                return <Venue venue={venue} />
            })}
            <button onClick={logout}>Log-out</button>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
