import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import styles from './index.scss';
import Card from '@/components/Card';

const Index:React.FC = () => {
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
      title: '多AI模型协同',
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
    {
      icon: '🌐',
      title: '互联网公司模拟',
      description: '模拟真实互联网公司运作，包含产品、技术、运营全流程',
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ff2e63)'
    },
    {
      icon: '⚡',
      title: '实时协作',
      description: '团队实时协作编辑，支持版本控制和智能合并',
      color: '#4cc9f0',
      gradient: 'linear-gradient(135deg, #4cc9f0, #4361ee)'
    },
    {
      icon: '🔧',
      title: '智能工具集',
      description: '内置代码生成、UI设计、数据分析等智能工具',
      color: '#f72585',
      gradient: 'linear-gradient(135deg, #f72585, #b5179e)'
    },
    {
      icon: '📊',
      title: '数据驱动',
      description: '基于大数据分析，提供市场洞察和用户行为预测',
      color: '#38b000',
      gradient: 'linear-gradient(135deg, #38b000, #007200)'
    }
  ];
  
  const workflows = [
    { step: 1, title: '创意生成', description: 'AI辅助生成创新想法和商业模式' },
    { step: 2, title: '原型设计', description: '智能生成交互原型和UI设计' },
    { step: 3, title: '技术实现', description: '自动生成代码和技术架构' },
    { step: 4, title: '测试优化', description: '智能测试和性能优化' },
    { step: 5, title: '部署上线', description: '一键部署到云平台' },
    { step: 6, title: '运营分析', description: '数据监控和智能运营建议' }
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
      
      {/* 主英雄区域 */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroGlow} />
          
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>多AI模型协同</span>
            <span className={styles.titleLine2}>智能产品孵化平台</span>
          </h1>
          
          <p className={styles.heroDescription}>
            将创意转化为产品的智能平台，集成全球领先AI模型，
            模拟互联网公司全流程，加速产品从0到1的诞生
          </p>
          
          <div className={styles.heroButtons}>
            <Link to="/whiteboard" className={styles.primaryButton}>
              <span className={styles.buttonGlow} />
              <span className={styles.buttonText}>立即体验</span>
              <span className={styles.buttonIcon}>→</span>
            </Link>
            
            <button className={styles.secondaryButton}>
              <span className={styles.buttonText}>观看演示</span>
              <span className={styles.buttonIcon}>▶</span>
            </button>
          </div>
          
          {/* 数据统计 */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>AI模型</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>成功项目</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>智能协作</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>可用性</div>
            </div>
          </div>
        </div>
        
        {/* 3D模型占位 */}
        <div className={styles.modelContainer}>
          <div className={styles.modelGlow} />
          <div className={styles.model}>
            <div className={styles.modelCube}>
              <div className={styles.modelFace} />
              <div className={styles.modelFace} />
              <div className={styles.modelFace} />
              <div className={styles.modelFace} />
              <div className={styles.modelFace} />
              <div className={styles.modelFace} />
            </div>
          </div>
        </div>
      </section>
      
      {/* 特性展示 */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleAccent}>核心</span>特性
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
      
      {/* 工作流程 */}
      <section className={styles.workflowSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            智能<span className={styles.titleAccent}>工作流</span>
          </h2>
          <p className={styles.sectionDescription}>
            从创意到产品的完整自动化流程，让创新变得更简单
          </p>
        </div>
        
        <div className={styles.workflowTimeline}>
          {workflows.map((item, index) => (
            <div key={index} className={styles.workflowStep}>
              <div className={styles.stepNumber}>
                <span>{item.step}</span>
                <div className={styles.stepGlow} />
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
              {index < workflows.length - 1 && (
                <div className={styles.stepConnector}>
                  <div className={styles.connectorLine} />
                  <div className={styles.connectorArrow}>→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA区域 */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            准备好开启你的
            <span className={styles.ctaHighlight}>智能产品之旅</span>
            了吗？
          </h2>
          <p className={styles.ctaDescription}>
            加入数千名创新者，体验AI驱动的产品开发新时代
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/whiteboard" className={styles.ctaPrimaryButton}>
              <span className={styles.buttonGlow} />
              <span className={styles.buttonText}>免费开始</span>
            </Link>
            <button className={styles.ctaSecondaryButton}>
              预约演示
            </button>
          </div>
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

export default Index;
