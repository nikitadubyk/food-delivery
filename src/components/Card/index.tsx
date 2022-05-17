import React from 'react'
import { Link } from 'react-router-dom'
import { FaCarAlt } from 'react-icons/fa'

import style from './Card.module.css'

interface CardProps {
    image: string
    name?: string
    timeDelivery?: number
    id?: number
    slider?: boolean
}

const Card: React.FC<CardProps> = ({
    image,
    name,
    timeDelivery,
    id,
    slider = false,
}) => {
    return (
        <Link
            to={`market/${id}`}
            className={slider ? style.card_slider : style.card}
        >
            <img
                src={image}
                alt={name}
                className={slider ? style.card__img_slider : style.card__img}
            />

            {!slider && (
                <div className={style.card__wrapper}>
                    <h3>{name}</h3>
                    <div className={style.card__descr}>
                        <FaCarAlt /> {timeDelivery} мин.
                    </div>
                </div>
            )}
        </Link>
    )
}

export default Card
