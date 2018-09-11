import React from 'react';
import ReactDOM from 'react-dom';


class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleLikeAction = this.handleLikeAction.bind(this);
  }

  handleLikeAction() {
    const { photo_id, deleteLike, addLike } = this.props;
    if (this.props.likeState) {
      deleteLike(photo_id);
    } else {
      addLike(photo_id);
    }
  };

  render() {
    const {likeState} = this.props;
    const noLike = "https://image.flaticon.com/icons/svg/149/149219.svg"
    const yesLike = "https://image.flaticon.com/icons/png/512/148/148838.png"
    const likeurl = likeState ? yesLike : noLike
    return (
      <div onClick={this.handleLikeAction}>
        <img src={likeurl} width="90" height="90"/>
      </div>
    );
  };
};

export default Like;
