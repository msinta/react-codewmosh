import React, { Component } from "react";

class LikeButton extends Component {

  handleBadge(){
    let classes = ""
    classes += this.props.liked === true ? "fa fa-heart" : "fa fa-heart-o" ;
    return classes
  }

  render() {
    return (
      <React.Fragment>
        <i
          className={this.handleBadge()}
          aria-hidden="true"
          onClick={() => {
            this.props.handleLike(this.props.movie)
          }}
        ></i>
      </React.Fragment>
    );
  }
}
export default LikeButton;
