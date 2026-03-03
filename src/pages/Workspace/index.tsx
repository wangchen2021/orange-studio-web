import React, { useEffect, useRef } from 'react'
import styles from './index.scss';
import { BackgroundRenderer } from './render';

const Workspace: React.FC = () => {
    const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const backgroundRenderer = useRef<BackgroundRenderer>(null);
    const renderResize = () => {
        backgroundRenderer.current?.resize();
    }
    useEffect(() => {
        if (!backgroundCanvasRef.current) {
            console.error('Canvas element not found');
            return;
        }
        backgroundRenderer.current = new BackgroundRenderer(backgroundCanvasRef.current);
        backgroundRenderer.current.init();
        window.addEventListener('resize', renderResize);
        return () => {
            window.removeEventListener('resize', renderResize);
        }
    }, [])
    return (
        <div className={styles.container}>
            <canvas ref={backgroundCanvasRef} className={styles.canvas}></canvas>
            <canvas ref={canvasRef} className={styles.canvas}></canvas>
        </div>
    )
}

export default Workspace;
