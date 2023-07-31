import React from 'react'
import { useState } from 'react';

const ImageCarousel = ({ images, style }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const getNext = () => {
        const nextIndex = (currentIndex + 1);
        if (nextIndex ===images.length)
            setCurrentIndex(0);
        else
            setCurrentIndex(nextIndex);
    }
    const getPrev = () => {
        const prevIndex = (currentIndex - 1);
        if (prevIndex ===-1)
            setCurrentIndex(images.length-1);
        else
            setCurrentIndex(prevIndex);
    }

  return (
    <section aria-label="Newest Photos">
        <div className='carousel' style={style}>
            <button className='carousel-button prev' onClick={getPrev}>&#8656;</button>
            <button className='carousel-button next' onClick={getNext}>&#8658;</button>
            <ul className='carouselRemoveLiStyles'>
                {images.map((image, index)=> {
                    return (
                        <li key={index} className={`slide`} {...(currentIndex === index && { 'data-active': '' })}
                        >
                            <img src={image.src} alt={image.alt} />
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default ImageCarousel