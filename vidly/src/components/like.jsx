import React, { Component } from "react";

class LikeButton extends Component {
  render() {
    return (
      <React.Fragment>
      <i class="fa fa-heart" aria-hidden="true" onClick={this.handleLike()}></i>
      <i className={this.handleLike()} aria-hidden="true"></i>
      </React.Fragment>
    );
  }

  handleLike(movie) {
    let classes = "fa"
    classes += this.props.handleLike === {movie} ? "fa-heart" : "fa-heart-o";
    return classes;
  }


}
export default LikeButton;
