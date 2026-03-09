"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { dsaTopics } from '@/data/dsaContent';
import ConceptCard from '@/components/dsa/ConceptCard';
import VisualRepresentation from '@/components/dsa/VisualRepresentation';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles, Terminal, ChevronRight, Code2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Interactive DSA Learning Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Master Data Structures & <span className="text-primary italic">Algorithms</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              From brute-force to optimal complexity. Visual explanations, interactive patterns, and industry-standard question sets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold gap-2">
                <Rocket className="h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-bold gap-2">
                <Terminal className="h-5 w-5" />
                Practice Problems
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Visual Section */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-muted/20 border rounded-[3rem] p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Understand Visually</h2>
            <p className="text-muted-foreground">
              Don't just memorize. See how data moves through memory. Our interactive visualizers help you build deep intuition for complex algorithms.
            </p>
            <ul className="space-y-4">
              {['Step-by-step execution', 'Memory pointer tracking', 'Complexity heatmaps'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10"></div>
            <VisualRepresentation type="linked-list" />
            <div className="mt-4 text-center text-xs text-muted-foreground font-mono">
              LinkedList Visualization Example
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="container py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-3">Core Curriculum</h2>
            <p className="text-muted-foreground">Structured learning path designed by top competitive programmers.</p>
          </div>
          <div className="flex gap-2 bg-muted p-1 rounded-full border">
            {['All', 'Structures', 'Algorithms'].map((tab) => (
              <button key={tab} className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${tab === 'All' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dsaTopics.map((topic, index) => (
            <ConceptCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </section>

      {/* Patterns Section */}
      <section className="bg-primary py-24 text-primary-foreground overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Learn Once, <br />Apply Always.</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                The secret to cracking FAANG interviews isn't knowing 1000 problems. It's mastering the <span className="underline decoration-wavy underline-offset-4">15 essential patterns</span> that solve 90% of them.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Sliding Window', 'Two Pointers', 'Merge Intervals', 'Fast & Slow'].map((pattern) => (
                  <div key={pattern} className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-2xl flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    <span className="font-semibold">{pattern}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-[2rem] border border-white/10 p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
               <pre className="text-xs md:text-sm font-mono text-emerald-300 overflow-x-auto">
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
      <footer className="border-t py-12 mt-24">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-lg">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold">AlgoFlow</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 AlgoFlow DSA. All rights reserved.</p>
          <div className="flex gap-6">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;