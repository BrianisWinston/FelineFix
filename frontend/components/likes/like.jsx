import React from 'react';
import ReactDOM from 'react-dom';


class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: `${props.likeState ?
          "fas" :
          "far"} fa-heart`,
          likeState: props.likeState,
          bullshit: 0
    };
    this.handleLikeAction = this.handleLikeAction.bind(this);
  }



  handleLikeAction() {
    const { photo_id, deleteLike, addLike } = this.props;
    console.log(photo_id);
    console.log(this.state.likeState);
    this.setState({bullshit: this.state.bullshit += 1})
    if (this.state.likeState) {
      deleteLike(photo_id);
      this.setState({classes: "far fa-heart"})
    } else {
      addLike(photo_id);
      this.setState({classes: "fas fa-heart"})
    }
  };



  render() {
    return (
      <div className="likes" onClick={() => this.handleLikeAction()}>
        <i className={this.state.classes}  ></i>
        {this.state.bullshit}
      </div>
    );
  };
};

export default Like;
