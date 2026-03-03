import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from './index.scss';
import Card from '@/components/Card';

const ModelsConfig:React.FC = () => {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number}>>([]);
  
  // 初始化粒子
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2
      });
    }
    setParticles(newParticles);
  }, []);
  
  // 粒子动画
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: (p.y + p.speed) % 100
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      icon: '🤖',
      title: 'DeepSeek',
      description: '集成GPT、Claude、文心一言等主流AI模型，智能调度最优模型组合',
      color: '#00d4ff',
      gradient: 'linear-gradient(135deg, #00d4ff, #0099ff)'
    },
    {
      icon: '🚀',
      title: '智能产品孵化',
      description: '从创意到产品的完整工作流，自动化生成原型、设计和代码',
      color: '#9d4edd',
      gradient: 'linear-gradient(135deg, #9d4edd, #560bad)'
    },
  ];
  
  return (
    <div className={styles.container}>
      {/* 导航栏 */}
      <Navbar />
      
      {/* 背景粒子 */}
      <div className={styles.particleBackground}>
        {particles.map((p, i) => (
          <div 
            key={i}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      {/* 特性展示 */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleAccent}>模型</span>配置
          </h2>
          <p className={styles.sectionDescription}>
            集成了最先进的AI技术和产品开发工具，为您提供全方位的智能支持
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </section>
      
      {/* 页脚 */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <div className={styles.logoIcon}>🍊</div>
            <div className={styles.logoText}>Orange Studio</div>
            <div className={styles.logoSubtitle}>智能产品孵化平台</div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>产品</h4>
              <a href="#">智能画板</a>
              <a href="#">AI模型</a>
              <a href="#">工作流</a>
              <a href="#">团队协作</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>资源</h4>
              <a href="#">文档</a>
              <a href="#">教程</a>
              <a href="#">API</a>
              <a href="#">社区</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>公司</h4>
              <a href="#">关于我们</a>
              <a href="#">博客</a>
              <a href="#">招聘</a>
              <a href="#">联系我们</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © 2024 Orange Studio. 保留所有权利。
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>GitHub</a>
            <a href="#" className={styles.socialLink}>Twitter</a>
            <a href="#" className={styles.socialLink}>Discord</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModelsConfig;
