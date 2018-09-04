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
    console.log(this.props.likeState);
    if (this.props.likeState) {
      deleteLike(photo_id);
    } else {
      addLike(photo_id);
    }
    console.log(this.props.likeState)
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
    const noLike = "https://image.flaticon.com/icons/svg/149/149219.svg"
    const yesLike = "https://image.flaticon.com/icons/png/512/148/148838.png"
    const likeurl = likeState ? yesLike : noLike
    return (
      <div onClick={this.handleLikeAction}>
        <img src={likeurl} width="90" height="90"/>
        {this.state.bullshit}
      </div>
    );
  };
};

export default Like;
