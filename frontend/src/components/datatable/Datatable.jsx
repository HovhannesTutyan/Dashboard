import Layout from '../../hocs/Layout';
import { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { get_cases, get_case, get_case_by_suit, get_case_by_search } from '../../redux/actions/testcases';

import React from 'react';
import './datatable.scss';
import { DataGrid } from "@mui/x-data-grid";
import Typography from '@mui/material/Typography';
import { userColumns } from "../../datatablesource";


const Datatable = ({
    get_case,
    get_cases,
    cases,
    get_case_by_search,
    get_case_by_suit
}) => {

    useEffect(() => {
        get_cases()
        // get_case(),
        // get_case_by_suit(),
        // get_case_by_search()
    }, [])

    const [data, setData] = useState(cases);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to={`case/${params.row.testcase_id}`} style={{ textDecoration: 'none' }}>
                        <div className="viewButton"> View </div>
                    </Link>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}> Delete </div>
                </div>
            )
        }
    }]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/cases/new" className="link">
                    Add New
                </Link>
            </div>
            {
                cases ?
                    <DataGrid
                        getRowId={(row) => row.testcase_id}
                        className="datagrid"
                        rows={cases}
                        columns={userColumns.concat(actionColumn)}
                        pageSize={20}
                        rowsPerPageOprions={[20]}
                        checkboxSelection
                    /> :
                    <Typography
                        variant="h6" >No pastor for this church yet!
                    </Typography>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cases: state.Cases.cases
})

export default connect(mapStateToProps, {
    get_cases,
    // get_case,
    // get_case_by_suit,
    // get_case_by_search
})(Datatable)