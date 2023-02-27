import React, { Component } from 'react'


class LikeButton extends Component {
  state = {  }

  handleLike = (movie) => {
    if(movie === true){
      <i class="fa fa-heart" aria-hidden="true"></i>
    }
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  };

  render() {
    return {handleLike()};
  }
}

export default LikeButton;
