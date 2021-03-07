import React, { Component } from "react";
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

        this.props.history.push('/notes/all'); //redirect after submiting note
    }

    render() {
        return (
          <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
              <div className="col s8 offset-s2">       
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h4>
                  Add<b> Note</b>
                  </h4>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChangeTitle}
                      value={this.state.title}
                      id="title"
                      type="text"
                    />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChangeNote}
                      value={this.state.note}
                      
                      type="text"
                    />
                    <label htmlFor="note">Note</label>              
                  </div>
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Add Note
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}


export default AddNote;