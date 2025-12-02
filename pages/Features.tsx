import React from 'react';
import Seo from '../components/Seo';
import { FEATURES } from '../constants';
import { CheckCircle2, Zap } from 'lucide-react';

const Features = () => {
  return (
    <>
      <Seo 
        title="App Features"
        description="Detailed breakdown of CodeBox features: DSA visualization, offline mode, and C/Java pattern library."
      />

      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 text-center">
          SYSTEM CAPABILITIES
        </h1>
        <p className="text-center text-gray-400 font-mono mb-16 max-w-2xl mx-auto">
          Designed for speed, efficiency, and retention.
        </p>

        <div className="space-y-24">
          {FEATURES.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-cyber-cyan font-mono text-sm uppercase tracking-wider">
                  <Zap className="w-4 h-4" /> Feature_0{index + 1}
                </div>
                <h2 className="text-3xl font-bold text-white font-sans">{feature.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3 pt-4">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                      <CheckCircle2 className="w-5 h-5 text-cyber-purple" />
                      <span>Optimized sub-routine for maximum efficiency</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative aspect-video bg-black/80 border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="relative z-10 border border-cyber-cyan/30 bg-black/50 p-6 backdrop-blur-md">
                    <code className="text-cyber-green font-mono text-sm">
                      $ init {feature.id}<br/>
                      {`> Loading module...`}<br/>
                      {`> [OK] Ready`}
                    </code>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
