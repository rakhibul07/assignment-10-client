import{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SliderCard = ({ slider }) => {
  const { image1, image2, image3 } = slider;
  const images = [image1, image2, image3];
  const slogans = ["Innovation in Technology", "Explore the Future of Tech", "Advancing Technology Every Day"];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;
  const slideInterval = 2000; 

  useEffect(() => {
    const timer = setInterval(() => {
    
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);
    }, slideInterval);

   
    return () => clearInterval(timer);
  }, [currentSlide, totalSlides]);

  const sloganOverlayStyle = {
    position: 'absolute',
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div className="carousel w-full h-[50vh] lg:h-[80vh] relative overflow-hidden ">
      {images.map((image, index) => (
        <div
          key={`slide${index + 1}`}
          className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-3000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} className="w-full h-full "/>
          <div style={sloganOverlayStyle}>
            <p className='text-4xl text-base-100'>{slogans[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
SliderCard.propTypes ={
  slider:PropTypes.object
}
export default SliderCard;
