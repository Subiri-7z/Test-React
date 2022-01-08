import {
    Nav,
    NavLink,
    Bars,
    NavBtn,
    NavBtnLink
} from './navbarelements';
import {useHistory} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/user.actions';

const Navbar = ({user, logout}) => {

    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={require('../../logo-custom.png')} alt='logo' />
                </NavLink>
                <Bars />
                <NavBtn>
                    <NavBtnLink to='/' onClick={logout}>Log Out</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

const mapDispatchToProps = {logout};

export default connect(null, mapDispatchToProps)(Navbar);
