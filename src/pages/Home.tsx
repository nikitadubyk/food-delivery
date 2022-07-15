import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { useAppDispatch } from '../redux/hooks'
import { selectSlider } from '../redux/slider/selectors'
import { selectFilter } from '../redux/filter/selectors'
import { fetchMarkets } from '../redux/market/marketSlice'
import { selectMarketData } from '../redux/market/selectors'
import { filteredMarketSelector } from '../redux/filter/selectors'

import Card from '../components/Card'
import Layout from '../components/Layout'
import SkeletonMarket from '../components/Card/SkeletonMarket'

import '@splidejs/splide/dist/css/splide.min.css'

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { search } = useSelector(selectFilter)
    const { sliderImages } = useSelector(selectSlider)
    const { loadingStatus } = useSelector(selectMarketData)
    const filteredMarket = useSelector(filteredMarketSelector)

    useEffect(() => {
        dispatch(fetchMarkets())
    }, [])

    const skeletons = [...new Array(6)].map((arr, index) => (
        <SkeletonMarket key={index} />
    ))

    return (
        <Layout
            title="Доставка еды"
            content="Доставка еды в г.Горловка с различных ресторанов"
        >
            <div className="root">
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
                                arrows: true,
                                pagination: true,
                            },
                            568: {
                                perPage: 2,
                                drag: 'free',
                                autoWidth: true,
                            },
                        },
                    }}
                >
                    {sliderImages.map((image, i) => {
                        return (
                            <SplideSlide key={i}>
                                <Card
                                    slider
                                    id={image.url}
                                    image={image.image}
                                />
                            </SplideSlide>
                        )
                    })}
                </Splide>

                <h2 className="home-title">Рестораны</h2>
                <div className="cards__wrapper">
                    {loadingStatus === 'loading' && skeletons}
                    {filteredMarket.map((market) => {
                        return (
                            <Card
                                id={market.id}
                                key={market.id}
                                name={market.name}
                                image={market.image}
                                timeDelivery={market.timeDelivery}
                            />
                        )
                    })}
                    {loadingStatus === 'error' && (
                        <p>Упс, произошла ошибка при получении ресторанов.</p>
                    )}
                    {search.length > 0 && filteredMarket.length === 0 && (
                        <p>Не удалось найти указанный ресторан</p>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Home
