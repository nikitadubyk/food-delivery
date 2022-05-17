import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import { selectorSlider } from '../redux/slider/selector'
import { useSelector } from 'react-redux'

import Card from '../components/Card'

const Home = () => {
    const sliders = useSelector(selectorSlider)

    return (
        <div className='root'>
            <Splide
                options={{
                    perPage: 4,
                    arrows: true,
                    gap: '2rem',
                    breakpoints: {
                        1200: {
                            perPage: 3,
                        },
                        640: {
                            perPage: 2,
                            pagination: true,
                            arrows: true,
                        },
                        560: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {sliders.sliderImages.map((image, i) => {
                    return (
                        <SplideSlide key={i}>
                            <Card image={image.image} id={image.url} slider />
                        </SplideSlide>
                    )
                })}
            </Splide>

            <h2 className='home-title'>Рестораны</h2>
            <Card
                id={1}
                image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                name='Test Name'
                timeDelivery={20}
            />
        </div>
    )
}

export default Home
