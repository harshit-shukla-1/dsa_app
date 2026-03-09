"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    >
      <Link 
        to={`/topic/${topic.id}`}
        className="group relative flex flex-col bg-card border rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full"
      >
        <div className="flex justify-between items-start mb-6">
          <Badge variant="secondary" className={`${difficultyColors[topic.difficulty]} border-none rounded-full px-4 py-1.5 font-bold text-[10px] uppercase tracking-widest`}>
            {topic.difficulty}
          </Badge>
          <div className="p-2.5 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors tracking-tight">{topic.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-8 flex-grow">{topic.description}</p>

        <div className="space-y-6 pt-6 border-t border-muted">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            <Layers size={14} className="text-primary" />
            <span>{topic.patterns.length} Essential Patterns</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {topic.patterns.slice(0, 2).map((pattern, i) => (
              <span key={i} className="text-[10px] bg-muted/50 px-3 py-1 rounded-full border border-border font-medium">
                {pattern}
              </span>
            ))}
            {topic.patterns.length > 2 && (
              <span className="text-[10px] text-muted-foreground flex items-center px-1 font-bold">+{topic.patterns.length - 2} MORE</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ConceptCard;