import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Database, ChevronDown, Bot, Cpu, MessageSquare, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, useLocation } from 'react-router-dom';

const HoverBg = () => (
  <motion.div
    layoutId="sidebar-hover-bg"
    className="absolute inset-0 bg-white/5 rounded-full -z-10"
    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
  />
);

export default function Sidebar() {
  const [isResourceOpen, setIsResourceOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 980); // custom breakpoint
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isCollapsed = isSmallScreen && !isSidebarHovered;
  const isResourceActive = location.pathname.startsWith('/manage');

  return (
    <aside 
      className={`fixed left-0 top-0 h-full glass-sidebar z-50 flex flex-col border-r border-white/10 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      {/* Brand */}
      <div className={`py-10 flex flex-row items-center overflow-hidden transition-all duration-300 ${isCollapsed ? 'px-0 justify-center' : 'px-6 gap-4'}`}>
        <img 
          src="https://i.postimg.cc/zG6WxX0Q/meng-ban-zu-382-2x.png" 
          alt="Logo" 
          className="w-8 h-8 object-contain shrink-0"
          referrerPolicy="no-referrer"
        />
        <h1 className={`font-headline font-bold text-t20 tracking-tight whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
          IRON 开放平台
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-x-hidden" onMouseLeave={() => setHoveredItem(null)}>
        <NavLink 
          to="/" 
          end
          onMouseEnter={() => setHoveredItem('iron')}
          className={({ isActive }) => `relative flex items-center h-[46px] group cursor-pointer z-10 rounded-full transition-all duration-300 ${isActive ? 'sidebar-active text-white' : 'text-secondary-text hover:text-on-surface'} ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
        >
          {hoveredItem === 'iron' && <HoverBg />}
          <div className={`flex items-center transition-transform duration-300 ${isCollapsed ? '' : 'gap-3 group-hover:translate-x-1.5 w-full'}`}>
            <LayoutDashboard className="w-5 h-5 shrink-0" />
            <span className={`font-medium text-t14 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>IRON 广场</span>
          </div>
        </NavLink>

        <div className="space-y-1 relative">
          <button 
            onClick={() => setIsResourceOpen(!isResourceOpen)}
            onMouseEnter={() => setHoveredItem('resource')}
            className={`w-full relative flex items-center h-[46px] transition-all duration-300 rounded-full group cursor-pointer z-10 ${isCollapsed ? 'justify-center px-0' : 'px-4'} ${isResourceActive ? 'sidebar-active text-white' : 'text-secondary-text hover:text-on-surface'}`}
          >
            {hoveredItem === 'resource' && <HoverBg />}
            <div className={`flex items-center transition-transform duration-300 ${isCollapsed ? 'justify-center' : 'justify-between w-full group-hover:translate-x-1.5'}`}>
              <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
                <Database className="w-5 h-5 shrink-0" />
                <span className={`text-t14 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>资源管理</span>
              </div>
              {!isCollapsed && (
                <motion.div animate={{ rotate: isResourceOpen ? 180 : 0 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              )}
            </div>
          </button>
          
          <AnimatePresence>
            {isResourceOpen && !isCollapsed && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pl-[48px] space-y-1 relative py-1">
                  <div className="sub-menu-line"></div>
                  {Object.entries({
                    '应用': '/manage/apps',
                    '动作': '/manage/actions',
                    '工具': '/manage/tools',
                    '地图': '/manage/maps',
                    '知识库': '/manage/knowledge'
                  }).map(([item, path]) => (
                    <NavLink 
                      key={item} 
                      to={path} 
                      onMouseEnter={() => setHoveredItem(`sub-${item}`)}
                      className={({ isActive }) => `relative flex items-center px-4 h-[40px] rounded-full transition-colors text-t14 cursor-pointer group z-10 ${isActive ? 'text-white font-bold' : 'text-secondary-text hover:text-on-surface'}`}
                    >
                      {hoveredItem === `sub-${item}` && <HoverBg />}
                      <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1.5 w-full whitespace-nowrap">
                        {item}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a 
          href="#" 
          onMouseEnter={() => setHoveredItem('model')}
          className={`relative flex items-center h-[46px] text-secondary-text hover:text-on-surface transition-all duration-300 rounded-full group cursor-pointer z-10 ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
        >
          {hoveredItem === 'model' && <HoverBg />}
          <div className={`flex items-center transition-transform duration-300 ${isCollapsed ? '' : 'gap-3 group-hover:translate-x-1.5 w-full'}`}>
            <Bot className="w-5 h-5 shrink-0" />
            <span className={`text-t14 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>模型管理</span>
          </div>
        </a>
        <a 
          href="#" 
          onMouseEnter={() => setHoveredItem('device')}
          className={`relative flex items-center h-[46px] text-secondary-text hover:text-on-surface transition-all duration-300 rounded-full group cursor-pointer z-10 ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
        >
          {hoveredItem === 'device' && <HoverBg />}
          <div className={`flex items-center transition-transform duration-300 ${isCollapsed ? '' : 'gap-3 group-hover:translate-x-1.5 w-full'}`}>
            <Cpu className="w-5 h-5 shrink-0" />
            <span className={`text-t14 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>设备管理</span>
          </div>
        </a>
        <a 
          href="#" 
          onMouseEnter={() => setHoveredItem('message')}
          className={`relative flex items-center h-[46px] text-secondary-text hover:text-on-surface transition-all duration-300 rounded-full group cursor-pointer z-10 ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
        >
          {hoveredItem === 'message' && <HoverBg />}
          <div className={`flex items-center transition-transform duration-300 ${isCollapsed ? '' : 'gap-3 group-hover:translate-x-1.5 w-full'}`}>
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span className={`text-t14 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>消息中心</span>
          </div>
        </a>
      </nav>

      {/* Footer Profile */}
      <div className={`pb-6 pt-0 mt-auto border-t border-white/10 overflow-hidden transition-all duration-300 ${isCollapsed ? 'px-0' : 'px-6'}`}>
        <div className={`pt-6 mb-6 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 h-0 w-0 hidden' : 'opacity-100'}`}>
          <div className="flex items-center group cursor-pointer gap-1 w-fit">
            <p className="text-t12 text-secondary-text group-hover:text-on-surface transition-colors whitespace-nowrap">机器人 KIMI 的小分队</p>
            <ChevronDown className="w-3 h-3 text-secondary-text group-hover:text-on-surface transition-colors shrink-0" />
          </div>
        </div>
        <div className={`flex items-center pb-2 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className={`flex items-center cursor-pointer group ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <img src="https://picsum.photos/seed/avatar1/100/100" alt="User" className="w-9 h-9 rounded-full object-cover border border-white/10 group-hover:border-accent-purple/50 transition-colors shrink-0" />
            <div className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>
              <p className="text-t12 group-hover:text-accent-purple transition-colors whitespace-nowrap">王思雨</p>
            </div>
          </div>
          {!isCollapsed && (
            <button className="text-secondary-text hover:text-on-surface transition-colors hover:rotate-90 duration-300 cursor-pointer shrink-0">
              <Settings className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
