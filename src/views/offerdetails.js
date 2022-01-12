import {useHistory, useLocation} from "react-router";
import {logout} from "../redux/actions/user.actions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getOfferDetails} from "../services/services";

function OfferDetails({user, logout}) {
  const history = useHistory();
  const location = useLocation();

  const offerId = location.search.split("=")[1];
  const token = user.token

  const [offerdetails, setOfferDetails] = useState({});

  useEffect(() => {
    getOfferDetails(token, offerId)
      .then((response) => {setOfferDetails(response)})
  }, [])

  return (
    <>
      <h2>Offer {offerId} Details</h2>
      <h3>Title: {offerdetails.title}</h3>
      <p>Category: {offerdetails.categoryName}</p>
      <p>Subcategory: {offerdetails.subcategoryName}</p>
      <p>Hours: {offerdetails.startHour} - {offerdetails.endHour}</p>
      <p>Description: {offerdetails.description}</p>
      <small>Detail: {offerdetails.detail}</small><br />
      <button onClick={history.goBack}>Back</button>
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
