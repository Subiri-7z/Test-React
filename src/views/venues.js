import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../redux/actions/user.actions"
import {getVenues} from "../services/services"
import Venue from "../components/venue";

function Venues({user, logout}) {

  const history = useHistory();

  const idBusiness = user.idBusiness
  const token = user.token

  const [venues, setVenues] = useState([]);

  useEffect(() => {
    if (user.token === '')
      history.push('/');
  }, [user])

  useEffect(() => {
    getVenues(token, idBusiness)
      .then(response => {setVenues(response)});
  }, [])

  return (
    <>
      <h1>Venues</h1>
      {venues.map((venue) => {
        return <Venue venue={venue} />
      })}
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
