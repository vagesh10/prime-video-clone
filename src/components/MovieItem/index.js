import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem

  return (
    <div className="movie-item">
      <Popup
        modal
        trigger={
          <button type="button" className="movie-button">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="movie-thumbnail"
            />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="video-popup-container">
            <button
              type="button"
              className="close-button"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>

            <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
