import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/filter/selectors'
import { selectMarketData } from '../../redux/market/selectors'
import { changeActiveFilter } from '../../redux/filter/filterSlice'

import './FoodFilter.css'

const FoodFilter: React.FC = () => {
    const dispatch = useDispatch()
    const { activeFilter } = useSelector(selectFilter)
    const { correctMarket } = useSelector(selectMarketData)

    const changeFiter = (filter: string) => dispatch(changeActiveFilter(filter))

    return (
        <div className='food-filter'>
            {correctMarket &&
                correctMarket.filters.map((filter, i) => {
                    return (
                        <div
                            className={`food-filter_item ${
                                activeFilter === filter &&
                                'food-filter_item_active'
                            }`}
                            key={i}
                            onClick={() => changeFiter(filter)}
                        >
                            {filter}
                        </div>
                    )
                })}
        </div>
    )
}

export default FoodFilter
