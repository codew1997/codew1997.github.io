import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import { SITE_NAME } from '../constants';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navClasses = (path: string) => `
    relative font-mono text-sm uppercase tracking-widest transition-all duration-300
    ${isActive(path) ? 'text-cyber-cyan text-shadow-cyan' : 'text-gray-400 hover:text-cyber-cyan'}
    before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-cyber-cyan before:transition-all before:duration-300
    hover:before:w-full
  `;

  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-body selection:bg-cyber-cyan selection:text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-cyber-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Terminal className="w-8 h-8 text-cyber-cyan group-hover:text-cyber-purple transition-colors duration-300" />
                <div className="absolute inset-0 blur-sm bg-cyber-cyan/30 group-hover:bg-cyber-purple/30 animate-pulse" />
              </div>
              <span className="text-2xl font-sans font-bold tracking-tighter text-white cyber-glitch-effect" data-text={SITE_NAME}>
                {SITE_NAME}
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={navClasses('/')}>Home</Link>
              <Link to="/features" className={navClasses('/features')}>Features</Link>
              <Link to="/about" className={navClasses('/about')}>About</Link>
              <Link to="/blog" className={navClasses('/blog')}>Blog</Link>
              
              <a href="#" className="
                px-6 py-2 bg-transparent border border-cyber-cyan text-cyber-cyan font-mono text-sm
                hover:bg-cyber-cyan hover:text-black transition-all duration-300
                shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]
              ">
                GET APP
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-cyber-cyan"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-cyber-black">
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyber-cyan font-mono">Home</Link>
              <Link to="/features" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyber-cyan font-mono">Features</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyber-cyan font-mono">About</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyber-cyan font-mono">Blog</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative">
        {/* Background Grid Effect */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
        <div className="relative z-10">
            {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-cyber-dark py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-sans font-bold text-white mb-2">{SITE_NAME}</h3>
              <p className="text-gray-500 font-mono text-sm max-w-md">
                Forged in the depths of binary. Designed for the architects of the future.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-cyber-cyan transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-500 hover:text-cyber-purple transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-500 hover:text-cyber-cyan transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} {SITE_NAME}. SYSTEM.ALL_RIGHTS_RESERVED //
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;