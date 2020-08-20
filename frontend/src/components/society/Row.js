import React from 'react';

const Row = (props) => {

    const {society} = props;

    return (
        <tr>
            <th scope="row">{society.society_id}</th>
            <td>{society.society_name}</td>
            <td>{society.address}</td>
            <td>{society.pincode}</td>
            <td>{society.society_code}</td>
            <td>{society.society_class}</td>
            <td>{society.society_pan}</td>
            <td>{society.society_members}</td>
        </tr>
    )
}

export default Row;