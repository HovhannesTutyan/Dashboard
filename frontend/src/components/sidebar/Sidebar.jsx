import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
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

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
          <Link to="/" style={{textDecoration:'none'}}>
            <span className="logo">logo</span>
          </Link>
        </div>
        <div className="center">
          <ul>
            <p className="title"> MAIN </p>
            <Link to="/" style={{textDecoration:'none'}}>
              <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title"> LISTS </p>
            <Link to="/users" style={{textDecoration:'none'}}>
              <li>
                <PersonOutlineIcon className='icon'/>
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{textDecoration: 'none'}}>
              <li>
                <StoreIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title"> USEFUL LINKS </p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notification</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <p className="title"> USER </p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOptions" onClick={() => dispatch({type: "LIGHT"})}></div>
          <div className="colorOptions" onClick={() => dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar