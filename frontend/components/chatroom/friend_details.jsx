import React from 'react';
import { withRouter } from 'react-router';

import FriendDetailsUserList from './friend_details_user_list';
import IconLinksComponent from '../icon_links/icon_links_component';

class FriendDetails extends React.Component {
  constructor(props) {
    super(props);
    const convoName = props.convoName;

    this.state = {
      isEditing: false,
    }

    this.togglePencil = this.togglePencil.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.saveConvoName = this.saveConvoName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.convoName !== nextProps.convoName) {
      this.setState({
        isEditing: false,
        convoName: nextProps.convoName
      })
    }
  }

  handleInput(e) {
    this.setState({ convoName: e.target.value })
  }

  saveConvoName(e) {
    e.preventDefault();
    this.props.updateConversation(this.props.currentConvo);
  }

  togglePencil(e) {
    this.setState({ isEditing: !this.state.isEditing })
  }

  staticHeader() {
    console.log("props, convoname, header", this.props);
    return (
      <div className="friend-details-header">
        <img src={this.props.convoImage}
          className="friend-details-convo-pic" />

        <span className="friend-details-convo-name">
          {this.props.convoName}
        </span>

        <i className="fa fa-pencil"
          aria-hidden="true"
          onClick={this.togglePencil}
        />
      </div>
    )
  }

  editHeader() {
    return (
      <div className="friend-details-header">
        <img src={this.props.convoImage}
          className="friend-details-convo-pic" />

        <input className="friend-details-convo-name"
          value={this.state.convoName}
          onChange={this.handleInput}
        />

        <i className="fa fa-floppy-o"
          aria-hidden="true"
          onClick={this.saveConvoName}
        />
      </div>
    )
  }

  friendDetails() {
    const header = (this.state.isEditing) ? (this.editHeader()) : (this.staticHeader());

    return (
      <div className="friend-details">
        {header}
        <IconLinksComponent />
        <FriendDetailsUserList convoUsers={this.props.convoUsers} />
      </div>
    )
  }

  render() {
    if (this.props.showFriendDetails) {
      return (
        <div>
          {this.friendDetails()}
        </div>
      )
    } else { return null }
  }
}

export default FriendDetails;
