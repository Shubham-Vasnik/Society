import React from 'react';
import { connect } from 'react-redux';

import {fetchSocieties} from '../../actions/';
import Row from './Row';

class SocietyList extends React.Component{

    componentDidMount(){
        this.props.fetchSocieties();
    }


    renderList(){
        return this.props.societies.map(society =>{

            return (
                <Row key={society.society_id} society={society} /> 
            )
        });
    }

    render = () => {
        return (
            <div className="mt-5">
                <h1>Socities</h1>


               <table className="table table-hover mt-5">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Society Id</th>
                    <th scope="col">Society Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Society Code</th>
                    <th scope="col">Society Class</th>
                    <th scope="col">Society Pan</th>
                    <th scope="col">Society Members</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        societies:Object.values(state.societies),
    };
}

export default connect(mapStateToProps, {fetchSocieties})(SocietyList);