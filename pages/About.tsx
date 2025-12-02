import React from 'react';
import Seo from '../components/Seo';
import { User, Terminal, Coffee } from 'lucide-react';

const About = () => {
  return (
    <>
      <Seo 
        title="About The Developer"
        description="The story behind CodeBox and the developer's mission to simplify coding interviews."
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-12 border-l-4 border-cyber-purple pl-6">
            ABOUT THE PROJECT
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
              <p>
                <span className="text-cyber-cyan font-bold">CodeBox</span> was born out of frustration. Fragmented tutorials, paywalled content, and reliable internet requirements made studying on the go impossible.
              </p>
              <p>
                We built a localized knowledge base. A single APK containing the wisdom of a thousand StackOverflow threads, distilled into pure, compilable patterns.
              </p>
              <p>
                No ads. No trackers. Just code.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 border border-white/10 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Terminal className="w-32 h-32 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Coffee className="text-cyber-cyan" /> Tech Stack
              </h3>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyber-cyan" /> Native Android (Kotlin)</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyber-cyan" /> Jetpack Compose UI</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyber-cyan" /> Room Database (Offline)</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyber-cyan" /> Gemini AI Integration</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-cyan to-cyber-purple rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">The Developer</h2>
                <p className="text-cyber-cyan font-mono text-sm">Senior Android Engineer & SEO Specialist</p>
              </div>
            </div>
            
            <p className="text-gray-400 font-mono mb-6">
              With over 10 years in the industry, I specialize in high-performance mobile applications and technical SEO. CodeBox is my contribution to the open-source community to help the next generation of engineers break the barrier to entry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
