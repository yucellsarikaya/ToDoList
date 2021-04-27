import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
export default class List extends Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>To do list</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.info.map((notes, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>{notes}</th>
                                    <th><Button color="danger" onClick={() => this.props.removeToDoList(index)}>Remove</Button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
