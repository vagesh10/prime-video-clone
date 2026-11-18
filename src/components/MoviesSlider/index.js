import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PreviousArrow = props => {
  const {onClick, className, style} = props

  return (
    <button
      type="button"
      className={`${className} custom-prev-arrow`}
      style={style}
      onClick={onClick}
      aria-label="Previous"
    >
      ❮
    </button>
  )
}

const NextArrow = props => {
  const {onClick, className, style} = props

  return (
    <button
      type="button"
      className={`${className} custom-next-arrow`}
      style={style}
      onClick={onClick}
      aria-label="Next"
    >
      ❯
    </button>
  )
}

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  }

  return (
    <Slider {...settings}>
      {moviesList.map(eachMovie => (
        <MovieItem key={eachMovie.id} movieItem={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
