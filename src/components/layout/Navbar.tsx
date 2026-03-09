"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="bg-primary p-1.5 rounded-lg">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">AlgoFlow</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Courses</Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Practice</Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Roadmaps</Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-muted px-3 py-1.5 rounded-full border border-border group cursor-pointer hover:border-primary/50 transition-all">
            <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            <span className="ml-2 text-xs text-muted-foreground pr-8">Search concepts...</span>
            <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="default" className="rounded-full px-6">Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;