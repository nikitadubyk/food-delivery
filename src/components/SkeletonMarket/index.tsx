import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonMarket = () => {
    return (
        <ContentLoader
            speed={2}
            width={320}
            height={280}
            viewBox='0 0 320 280'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
            style={{ margin: '2rem' }}
        >
            <rect x='2' y='3' rx='2' ry='2' width='320' height='177' />
            <rect x='5' y='199' rx='2' ry='2' width='237' height='26' />
        </ContentLoader>
    )
}

export default SkeletonMarket
