import React from 'react'

import Card from '../components/Card'

const Home = () => {
    return (
        <div className='root'>
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
