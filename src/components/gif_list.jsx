import React, { Component } from 'react';
import Gif from './gif'

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(({id}) => <Gif id={id} key={id} selectGif={this.props.selectGif} /> );
  }

  render() {
    return (
      <div className="giflist">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;