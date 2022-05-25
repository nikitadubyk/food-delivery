import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { selectSlider } from '../redux/slider/selectors'
import { useSelector } from 'react-redux'
import { filteredMarketSelector } from '../redux/filter/selectors'

import Card from '../components/Card'

import '@splidejs/splide/dist/css/splide.min.css'

const Home: React.FC = () => {
    const { sliderImages } = useSelector(selectSlider)
    const filteredMarket = useSelector(filteredMarketSelector)

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
                        768: {
                            perPage: 2,
                            pagination: true,
                            arrows: true,
                        },
                    },
                }}
            >
                {sliderImages.map((image, i) => {
                    return (
                        <SplideSlide key={i}>
                            <Card image={image.image} id={image.url} slider />
                        </SplideSlide>
                    )
                })}
            </Splide>

            <h2 className='home-title'>Рестораны</h2>
            <div className='cards__wrapper'>
                {filteredMarket.map(market => {
                    return (
                        <Card
                            id={market.id}
                            image={market.image}
                            name={market.name}
                            timeDelivery={market.timeDelivery}
                            key={market.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
