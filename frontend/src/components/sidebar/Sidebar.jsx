import React, { useContext, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logout, load_user } from '../../redux/actions/auth';
import { DarkModeContext } from '../../context/darkModeContext';
import './sidebar.scss';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Sidebar({ 
    isAuthenticated,
    user,
    load_user,
    logout, 
  }) {
  useEffect (() => {
    load_user()
  }, [])
  const { dispatch } = useContext(DarkModeContext);

  const [redirect, setRedirect] = useState(false);
  const logoutHandler = () => {
    logout();
    setRedirect(true);
  }
  if (redirect) {
    return <Navigate to="/signin" />
  }

  const guestLinks = (
    <Fragment>
      <Link to="/signin">
        Sign In
      </Link>
      <Link to="/signup">
        Register
      </Link>
    </Fragment>
  )

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">{user?.first_name}</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title"> MAIN </p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <button>Dashboard</button>
            </li>
          </Link>
          <p className="title"> LISTS </p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <button>Users</button>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className="icon" />
              <button>Products</button>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <button>Delivery</button>
          </li>
          <p className="title"> USEFUL LINKS </p>
          <li>
            <InsertChartIcon className="icon" />
            <button>Stats</button>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <button>Notification</button>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <button>Settings</button>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <button>Logs</button>
          </li>
          <p className="title"> USER </p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <button>Profile</button>
          </li>
          <form method="POST" action="#">
            <li>
              <ExitToAppIcon className="icon" />
              <button onClick={ logoutHandler }>Logout</button>
            </li>
          </form>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOptions" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
})

export default connect (mapStateToProps, {
  logout,  
  load_user
}) (Sidebar)