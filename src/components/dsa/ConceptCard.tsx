"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { type Topic } from '@/data/dsaContent';

interface ConceptCardProps {
  topic: Topic;
  index: number;
}

const ConceptCard = ({ topic, index }: ConceptCardProps) => {
  const difficultyColors = {
    Beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Advanced: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col bg-card border rounded-3xl p-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <Badge variant="secondary" className={`${difficultyColors[topic.difficulty]} border-none rounded-full px-3 py-1 font-semibold text-[10px] uppercase tracking-wider`}>
          {topic.difficulty}
        </Badge>
        <button className="p-2 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <ArrowUpRight size={18} />
        </button>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">{topic.description}</p>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
          <Layers size={14} className="text-primary/60" />
          <span>Patterns: {topic.patterns.length}</span>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {topic.patterns.slice(0, 2).map((pattern, i) => (
            <span key={i} className="text-[10px] bg-muted px-2 py-0.5 rounded-full border border-border">
              {pattern}
            </span>
          ))}
          {topic.patterns.length > 2 && (
            <span className="text-[10px] text-muted-foreground flex items-center px-1">+{topic.patterns.length - 2}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ConceptCard;