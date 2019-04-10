import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Availableaccomadation extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            firstName: "",
            lastName: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        if (event.target.name === "firstName")
            this.setState({ firstName: event.target.value });
        if (event.target.name === "lastName")
            this.setState({ lastName: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
    };
    renderEditable = cellInfo => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    };
    render() {
        const { data } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <p className="App-intro">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Search Record Here</h3>
                        <label>
                            Enter the Area:
                            <input
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </label>{" "}

                        <input type="submit" value="Search HERE" />
                    </form>
                </p>
                <div className="TableRow">
                    <ReactTable
                        data={data}
                        columns={[
                            {
                                Header: "Accomadation Name",
                                accessor: "firstName",
                                Cell: this.renderEditable
                            },
                            {
                                Header: "No of Rooms Available",
                                accessor: "lastName",
                                Cell: this.renderEditable
                            },
                            {
                                Header: "Luxury or Semi Luxury",
                                id: "full",
                                accessor: d => (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: d.firstName + " " + d.lastName
                                        }}
                                    />
                                )
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        );
    }
}
export default Availableaccomadation;
