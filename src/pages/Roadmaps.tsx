"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import { Map, Code, Briefcase, Zap, Trophy, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Roadmaps = () => {
  const roadmaps = [
    {
      title: "Interview Essentials",
      description: "Focus on the top 50 patterns for FAANG interviews.",
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      stats: "24 Topics • 120 Problems",
      color: "blue"
    },
    {
      title: "Zero to Hero DSA",
      description: "Complete guide from basic arrays to advanced graphs.",
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      stats: "45 Topics • 300 Problems",
      color: "amber"
    },
    {
      title: "Competitive Programmer",
      description: "Advanced algorithms, Segment Trees, and Hard DP.",
      icon: <Trophy className="h-6 w-6 text-emerald-500" />,
      stats: "32 Topics • 500 Problems",
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-16">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Learning Roadmaps</h1>
          <p className="text-xl text-muted-foreground">
            Follow a structured path designed to help you reach your goals faster. Don't get lost in the sea of problems.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((map, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full rounded-[2.5rem] p-4 hover:shadow-xl transition-all group border-muted">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6 p-4 rounded-3xl bg-muted/50 w-fit group-hover:scale-110 transition-transform">
                    {map.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{map.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-grow">{map.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t">
                    <span className="text-xs font-semibold text-muted-foreground">{map.stats}</span>
                    <Button variant="ghost" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Roadmaps;