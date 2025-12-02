import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ChevronRight, Code, Cpu, Database } from 'lucide-react';
import Seo from '../components/Seo';
import { FEATURES, PLAY_STORE_URL } from '../constants';

const Home = () => {
  return (
    <>
      <Seo 
        title="Master Algorithms & Patterns"
        description="The ultimate coding interview companion. Offline DSA cheat sheets, design patterns, and LeetCode mastery."
        keywords="DSA, LeetCode, Java Patterns, Android App, Coding Interview"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-purple/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-cyber-cyan/30 rounded-full bg-cyber-cyan/10 backdrop-blur-md">
            <span className="text-cyber-cyan font-mono text-xs tracking-widest">SYSTEM_VERSION: 2.0.77</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 leading-tight">
            MASTER THE CODE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple animate-pulse">
              HACK THE INTERVIEW.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-mono">
            Your pocket arsenal for algorithms, data structures, and design patterns. 
            Zero latency. Offline ready.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-cyber-cyan text-black font-bold font-sans tracking-wide overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                <Download className="w-5 h-5" />
                DOWNLOAD NOW
              </span>
            </a>
            
            <Link 
              to="/features"
              className="px-8 py-4 border border-cyber-purple text-cyber-purple font-bold font-sans tracking-wide hover:bg-cyber-purple/10 transition-colors flex items-center gap-2"
            >
              EXPLORE FEATURES <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Tech Strip */}
      <div className="border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex justify-around text-gray-500 font-mono text-sm">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-cyber-cyan" /> <span>500+ PATTERNS</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyber-purple" /> <span>O(1) ACCESS</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-cyber-green" /> <span>OFFLINE_DB</span>
          </div>
        </div>
      </div>

      {/* Quick Features Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-sans font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-cyber-cyan pb-2">SYSTEM MODULES</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.slice(0, 3).map((feature) => (
              <div key={feature.id} className="p-8 border border-white/10 bg-white/5 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all duration-300 group">
                <div className="mb-4 text-cyber-cyan group-hover:text-white transition-colors">
                  <Cpu className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sans">{feature.title}</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
