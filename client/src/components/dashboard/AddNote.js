import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
import axios from "axios";


class AddNote extends Component {
    constructor(props) {
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            note: ''
        }
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeNote(e) {
        this.setState({ note: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            title: this.state.title,
            note: this.state.note
        };

        axios.post('/notes/add', userObject)
            .then((res) => {
                this.setState({ title: res.data.title, note: res.data.note})
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitle} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User Email</label>
                        <input type="text" value={this.state.note} onChange={this.onChangeNote} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}

// AddNote.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

export default AddNote;