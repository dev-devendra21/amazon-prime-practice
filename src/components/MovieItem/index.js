// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player/lazy'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

export const ActionMovie = props => {
  const {actionMovies} = props
  const {thumbnailUrl, videoUrl} = actionMovies
  return (
    <div className="movie-item-container">
      <Popup
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="movie-img" />
          </button>
        }
        modal
        className="popup-content"
      >
        {close => (
          <>
            <div className="modal">
              <button
                type="button"
                data-testid="closeButton"
                className="close"
                onClick={close}
              >
                <IoMdClose />
                {}
              </button>
              <div className="content">
                <ReactPlayer width="520px" url={videoUrl} />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export const ComedyMovie = props => {
  const {comedyMovies} = props
  const {thumbnailUrl, videoUrl} = comedyMovies

  return (
    <>
      <div className="movie-item-container">
        <Popup
          trigger={
            <button className="trigger-button" type="button">
              <img src={thumbnailUrl} alt="thumbnail" className="movie-img" />
            </button>
          }
          modal
          className="popup-content"
        >
          {close => (
            <>
              <div className="modal">
                <button
                  type="button"
                  data-testid="closeButton"
                  className="close"
                  onClick={close}
                >
                  <IoMdClose />
                  {}
                </button>
                <div className="content">
                  <ReactPlayer width="520px" url={videoUrl} />
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </>
  )
}
