import { connect } from 'react-redux';
import { check_authenticated, load_user, refresh } from '../redux/actions/auth';
import Navbar from '../components/navbar/Navbar';
import { useEffect } from 'react';

const Layout = (props) => {
    useEffect(() => {
        props.refresh();
        props.check_authenticated();
        props.load_user();
    }, [])

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default connect(null, {
    check_authenticated,
    load_user,
    refresh,
}) (Layout);