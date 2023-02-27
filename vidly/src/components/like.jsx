import React, { Component } from 'react'


class LikeButton extends Component {
  render() {
    return (<button
      onClick={() => this.handleLike(this.props.movie)}></button>);

  }


handleLike = (movie) => {
    movie === true ? <i class="fa fa-heart" aria-hidden="true"></i> : <i class="fa fa-heart-o" aria-hidden="true"></i>
  };

}
export default LikeButton;
