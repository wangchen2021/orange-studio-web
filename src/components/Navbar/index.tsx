import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', label: '首页', path: '/' },
    { id: 'whiteboard', label: '工作空间', path: '/workspace' },
    { id: 'workflow', label: '工作流', path: '/workflow' },
    { id: 'projects', label: '项目', path: '/projects' },
    { id: 'models', label: '模型配置', path: '/modelsConfig' },
    { id: 'docs', label: '文档', path: '/docs' },
  ];

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo区域 */}
        <div className={styles.logoSection}>
          <Link to="/" className={styles.logo} onClick={() => handleNavClick('home')}>
            <div className={styles.logoIcon}>
              <div className={styles.logoGlow} />
              <span className={styles.logoText}>Orange Studio</span>
            </div>
            <div className={styles.logoSubtitle}>
              多模型协同 · 智能产品孵化
            </div>
          </Link>
        </div>

        {/* 桌面导航 */}
        <div className={styles.desktopNav}>
          <div className={styles.navItems}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className={styles.navLabel}>{item.label}</span>
                <div className={styles.navUnderline} />
              </Link>
            ))}
          </div>

          {/* 用户操作区域 */}
          <div className={styles.userActions}>
            <button className={styles.actionButton}>
              <span className={styles.actionIcon}>🚀</span>
              <span className={styles.actionText}>开始创作</span>
            </button>
            <button className={styles.userButton}>
              <div className={styles.userAvatar}>
                <div className={styles.avatarGlow} />
                <span className={styles.avatarInitial}>AI</span>
              </div>
            </button>
          </div>
        </div>

        {/* 移动端菜单按钮 */}
        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="菜单"
        >
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* 移动端菜单 */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavItems}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`${styles.mobileNavItem} ${activeItem === item.id ? styles.active : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className={styles.mobileNavLabel}>{item.label}</span>
              <div className={styles.mobileNavIndicator} />
            </Link>
          ))}
        </div>
        
        <div className={styles.mobileActions}>
          <button className={styles.mobileActionButton}>
            <span className={styles.mobileActionIcon}>🚀</span>
            <span>开始创作</span>
          </button>
        </div>
      </div>

      {/* 导航栏底部光效 */}
      <div className={styles.navGlow} />
    </nav>
  );
};

export default Navbar;