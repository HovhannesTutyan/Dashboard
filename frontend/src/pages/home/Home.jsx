import Layout from '../../hocs/Layout';
import { connect } from "react-redux";
import {
  get_testsuits
} from '../../redux/actions/testsuits';
import { useEffect } from 'react';

import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import React from 'react';
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = ({
  get_testsuits,
  test_suits_list
}) => {
  useEffect(() => {
    get_testsuits();
  }, [get_testsuits])

  
  return (
    <Layout >
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          < Widget type="user" />
          < Widget type="order" />
          < Widget type="earning" />
          < Widget type="balance" />
        </div>
        <div className="charts">
          < Featured />
          < Chart aspect={2/1} title="Last 6 Months" />
        </div>
        <div className="listContainer">
          <div className="listTitle"> Latest Transactions </div>
          < Table data={test_suits_list}/>
        </div>
      </div>
    </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  test_suits_list: state.TestSuits.TestSuits
})

export default connect (mapStateToProps, {
  get_testsuits,
}) (Home)