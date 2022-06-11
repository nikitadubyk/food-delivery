import React, { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { selectSlider } from '../redux/slider/selectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/hooks'
import { fetchMarkets } from '../redux/market/marketSlice'
import { filteredMarketSelector } from '../redux/filter/selectors'
import { selectMarketData } from '../redux/market/selectors'

import SkeletonMarket from '../components/Card/SkeletonMarket'
import Card from '../components/Card'
import Layout from '../components/Layout'

import '@splidejs/splide/dist/css/splide.min.css'

const Home: React.FC = () => {
    const { sliderImages } = useSelector(selectSlider)
    const filteredMarket = useSelector(filteredMarketSelector)
    const { loadingStatus } = useSelector(selectMarketData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMarkets())
    }, [])

    const skeletons = [...new Array(6)].map((arr, index) => (
        <SkeletonMarket key={index} />
    ))

    return (
        <Layout
            title='Доставка еды'
            content='Доставка еды в г.Горловка с различных ресторанов'
        >
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
                                <Card
                                    image={image.image}
                                    id={image.url}
                                    slider
                                />
                            </SplideSlide>
                        )
                    })}
                </Splide>

                <h2 className='home-title'>Рестораны</h2>
                <div className='cards__wrapper'>
                    {loadingStatus === 'loading' && skeletons}
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
                    {loadingStatus === 'error' && (
                        <p>Упс, произошла ошибка при получении ресторанов.</p>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Home
