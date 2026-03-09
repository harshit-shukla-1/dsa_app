"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface VisualProps {
  type: "array" | "linked-list" | "tree" | "graph" | "string";
}

const VisualRepresentation = ({ type }: VisualProps) => {
  if (type === 'array') {
    return (
      <div className="flex gap-2 justify-center p-8 bg-muted/30 rounded-2xl overflow-x-auto">
        {[10, 20, 30, 40, 50].map((val, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center font-bold text-primary">
              {val}
            </div>
            <span className="text-[10px] text-muted-foreground mt-1">idx {i}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'linked-list') {
    return (
      <div className="flex items-center justify-center p-8 bg-muted/30 rounded-2xl overflow-x-auto">
        {[1, 2, 3].map((val, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex border-2 border-primary/20 rounded-xl overflow-hidden bg-background"
            >
              <div className="px-4 py-3 border-r border-primary/20 font-bold">{val}</div>
              <div className="px-3 py-3 bg-primary/5 text-primary text-xs flex items-center">ptr</div>
            </motion.div>
            {i < 2 && <ArrowRight className="mx-4 text-muted-foreground" size={20} />}
            {i === 2 && <span className="ml-4 text-muted-foreground font-mono">null</span>}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8 bg-muted/30 rounded-2xl min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">R</div>
        <div className="absolute top-12 -left-8 w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-sm font-medium">L</div>
        <div className="absolute top-12 -right-8 w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-sm font-medium">R</div>
      </div>
    </div>
  );
};

export default VisualRepresentation;