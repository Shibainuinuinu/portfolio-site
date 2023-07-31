import React from 'react'

const ImageCarousel = ({ images }) => {
  return (
    <section aria-label="Newest Photos">
        <div className='carousel'>
            <button className='carousel-button prev'>&#8656;</button>
            <button className='carousel-button next'>&#8658;</button>
            <ul>
                {images.map((image, index)=> {
                    return (
                        <li key={index} className="slide" {...(index === 0 && { 'data-active': '' })}>
                            <img className="carouselImageSize" src={image.src} alt={image.alt} />
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default ImageCarousel