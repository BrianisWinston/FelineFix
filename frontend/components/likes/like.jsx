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
    // console.log(photo_id);
    // console.log(this.state.likeState);
    if (this.props.likeState) {
      deleteLike(photo_id);
    } else {
      addLike(photo_id);
    }
  };

  componentWillUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log("aaaaaaa");
    // console.log(nextState);
    // const { photo_id, deleteLike, addLike } = this.props;
    // if (this.state.likeState) {
    //   deleteLike(photo_id);
    //   this.setState({classes: "fas fa-heart"})
    // } else {
    //   addLike(photo_id);
    //   this.setState({classes: "far fa-heart"})
    // }
  }


  render() {
    const {likeState} = this.props;
    const classes = `${likeState ? "fas" : "far"} fa-heart`;
    return (
      <div className="likes" onClick={() => this.handleLikeAction()}>
        <i className={classes}></i>
        {this.state.bullshit}
      </div>
    );
  };
};

export default Like;
