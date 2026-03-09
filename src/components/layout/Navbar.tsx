"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, Github, Search, Menu, X, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { dsaTopics } from '@/data/dsaContent';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredTopics = dsaTopics.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Curriculum</Link>
          <Link to="/practice" className="text-sm font-medium hover:text-primary transition-colors">Practice</Link>
          <Link to="/roadmaps" className="text-sm font-medium hover:text-primary transition-colors">Roadmaps</Link>
        </div>

        <div className="flex items-center gap-3">
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogTrigger asChild>
              <div className="hidden sm:flex items-center bg-muted px-3 py-1.5 rounded-full border border-border group cursor-pointer hover:border-primary/50 transition-all">
                <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                <span className="ml-2 text-xs text-muted-foreground pr-8">Search concepts...</span>
                <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden rounded-3xl">
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <input
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Type a concept or algorithm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredTopics.length > 0 ? (
                  filteredTopics.map(topic => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        navigate(`/topic/${topic.id}`);
                        setIsSearchOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-muted transition-colors flex items-center justify-between group"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{topic.title}</span>
                        <span className="text-[10px] text-muted-foreground">{topic.category}</span>
                      </div>
                      <Command className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-sm text-muted-foreground">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

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