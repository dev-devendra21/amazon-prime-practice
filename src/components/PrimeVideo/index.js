// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = () => (
  <>
    <div className="prime-video-container">
      <div className="prime-video-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-logo"
        />
      </div>
      <div className="movies-container">
        <MoviesSlider />
      </div>
    </div>
  </>
)

export default PrimeVideo
