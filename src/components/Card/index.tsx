import React from 'react'
import styles from './index.scss'

interface CardProps{
    icon: string;
    title: string;
    description: string;
    color: string;
    gradient: string;
}

const Card: React.FC<CardProps> = ({icon, title, description, color, gradient}) => {
    return (
        <div
            className={styles.featureCard}
            style={{
                '--card-color': color,
                '--card-gradient': gradient
            } as React.CSSProperties}
        >
            <div className={styles.cardGlow} />
            <div className={styles.cardIcon}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <div className={styles.cardHoverEffect} />
        </div>
    )
}

export default Card
