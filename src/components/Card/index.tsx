import React from 'react';
import styles from './index.scss';

interface CardProps {
  icon: string;
  title: string;
  description?: string;
  link?: string;
  color: string;
  gradient: string;
  pointerEvents?: () => void;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  color,
  gradient,
  pointerEvents,
  link,
}) => {
  return (
    <div
      className={styles.featureCard}
      style={
        {
          '--card-color': color,
          '--card-gradient': gradient,
          cursor: pointerEvents ? 'pointer' : '',
        } as React.CSSProperties
      }
    >
      <div className={styles.cardGlow} />
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {link && (
        <a href={link} target="_blank" className={styles.cardLink}>
          {link}
        </a>
      )}
      <div className={styles.cardHoverEffect} />
    </div>
  );
};

export default Card;
