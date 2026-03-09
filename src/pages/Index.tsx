"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { dsaTopics } from '@/data/dsaContent';
import ConceptCard from '@/components/dsa/ConceptCard';
import VisualRepresentation from '@/components/dsa/VisualRepresentation';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles, Terminal, ChevronRight, Code2, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [filter, setFilter] = useState<'All' | 'Data Structures' | 'Algorithms'>('All');

  const filteredTopics = dsaTopics.filter(t => 
    filter === 'All' ? true : t.category === filter
  );

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
              <Sparkles className="h-4 w-4" />
              <span>Future-Proof Your Career</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-balance">
              Code with <br /><span className="text-primary italic">Deep Intuition.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
              Skip the memorization. Master the underlying patterns that govern the world's most efficient software.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg font-black gap-3 shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
                <Rocket className="h-6 w-6" />
                Get Started
              </Button>
              <Link to="/practice">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-black gap-3 transition-transform hover:scale-105 active:scale-95 border-2">
                  <Terminal className="h-6 w-6" />
                  Practice Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="container py-32 border-t border-muted/30">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black tracking-tighter mb-6">Core Curriculum</h2>
            <p className="text-xl text-muted-foreground font-medium">A battle-tested path from the basics of memory to advanced algorithmic strategies.</p>
          </div>
          <div className="flex gap-2 bg-muted/50 p-1.5 rounded-full border-2 w-fit">
            {(['All', 'Data Structures', 'Algorithms'] as const).map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFilter(tab)}
                className={`px-8 py-3 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${filter === tab ? 'bg-primary shadow-lg text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredTopics.map((topic, index) => (
              <ConceptCard key={topic.id} topic={topic} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Featured Visual Section */}
      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-primary/5 border-2 border-primary/10 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Understand the <br />Flow of Data</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Every data structure has a unique rhythm. Our visualizers help you "see" how elements interact in memory, turning abstract concepts into concrete mental models.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Step-by-step Execution', desc: 'Trace every variable change in real-time.' },
                { label: 'Complexity Heatmaps', desc: 'Visualize where your algorithm spends its time.' },
                { label: 'Memory Pointer Tracking', desc: 'Never lose track of a pointer again.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-black italic">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
            <VisualRepresentation type="linked-list" />
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Live Visualizer Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="bg-primary py-32 text-primary-foreground overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Learn Once, <br />Apply Always.</h2>
              <p className="text-primary-foreground/80 text-xl font-medium leading-relaxed">
                The secret to cracking FAANG interviews isn't knowing 1000 problems. It's mastering the <span className="underline decoration-wavy underline-offset-8 decoration-primary-foreground/30">15 essential patterns</span> that solve 90% of them.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Sliding Window', 'Two Pointers', 'Merge Intervals', 'Fast & Slow Pointers'].map((pattern) => (
                  <div key={pattern} className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-[2rem] flex items-center gap-4 hover:bg-white/15 transition-colors cursor-default">
                    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
                    <span className="font-black text-xs uppercase tracking-widest">{pattern}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-[3rem] border border-white/10 p-10 md:p-14 -rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl relative">
               <div className="absolute top-4 left-6 flex gap-2">
                 <div className="h-3 w-3 rounded-full bg-rose-500/50"></div>
                 <div className="h-3 w-3 rounded-full bg-amber-500/50"></div>
                 <div className="h-3 w-3 rounded-full bg-emerald-500/50"></div>
               </div>
               <pre className="text-sm md:text-base font-mono text-emerald-300 overflow-x-auto leading-relaxed pt-6">
                <code>{`// Sliding Window Pattern
function findMaxSum(arr, k) {
  let maxSum = 0, windowSum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    if (end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[start];
      start++;
    }
  }
  return maxSum;
}`}</code>
               </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-20 mt-32 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-xl">
                  <Code2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-black tracking-tighter">AlgoFlow</span>
              </div>
              <p className="text-muted-foreground font-medium max-w-sm">
                Dedicated to making DSA accessible, visual, and intuitive for developers around the world.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary">Platform</h4>
              <ul className="space-y-3 text-sm font-bold text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Curriculum</Link></li>
                <li><Link to="/practice" className="hover:text-primary transition-colors">Practice</Link></li>
                <li><Link to="/roadmaps" className="hover:text-primary transition-colors">Roadmaps</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary">Community</h4>
              <ul className="space-y-3 text-sm font-bold text-muted-foreground">
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Github className="h-4 w-4" /> Github
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">Discord</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-muted">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">© 2024 AlgoFlow DSA. Engineered for excellence.</p>
            <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-muted-foreground">
              <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;