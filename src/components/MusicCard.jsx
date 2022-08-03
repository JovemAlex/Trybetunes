import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const {
      trackName,
      previewUrl,
    } = this.props;

    return (
      <div>
        <h3>{trackName}</h3>
        <audio src={ previewUrl } controls data-testid="audio-component">
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};