import OfferDetails from "../views/offerdetails";
import Login from "../views/login";
import Venues from "../views/venues";
import Offers from "../views/offers";

export default [
    {
        component: Venues,
        path: "/venues"
    },
    {
        component: Offers,
        path: "/offers"
    },
    {
        component: OfferDetails,
        path: "/offerdetails"
    },
    {
        component: Login,
        path: "/"
    },
];
