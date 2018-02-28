import React from 'react'
import Slider from 'react-slick'


const settings = {
  arrows: false,
  dots: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1
}


const generateSlides = ({slider}) => {
  if(slider){
    return (
      <Slider {...settings}>
        {slider.map((slide) => {
          return (
            <div key={slide.id}
                 className='slide'
                 style={{background:`url(/images/covers/${slide.cover})`}}
            >
              <div className='caption'>
                <h4>{slide.topic}</h4>
                <p>{slide.title}</p>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }
}


const Featured = (props) => (
  <div>
    {generateSlides(props)}
  </div>
)

export default Featured