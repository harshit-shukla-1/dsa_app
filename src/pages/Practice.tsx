"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ExternalLink, Code2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const Practice = () => {
  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", category: "Arrays", acceptance: "51.2%" },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", category: "Linked List", acceptance: "42.1%" },
    { id: 3, title: "Longest Substring", difficulty: "Medium", category: "Strings", acceptance: "34.5%" },
    { id: 4, title: "Median of Two Arrays", difficulty: "Hard", category: "Arrays", acceptance: "38.9%" },
    { id: 5, title: "Valid Parentheses", difficulty: "Easy", category: "Stacks", acceptance: "40.3%" },
    { id: 6, title: "Merge K Sorted Lists", difficulty: "Hard", category: "Linked List", acceptance: "50.1%" },
    { id: 7, title: "Binary Tree Max Path", difficulty: "Hard", category: "Trees", acceptance: "39.4%" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filtered = problems.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">Practice Problems</h1>
            <p className="text-muted-foreground">Hand-picked selection of high-yield problems to sharpen your skills.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search problems..." 
              className="pl-10 rounded-full bg-muted/50 border-none" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-card border rounded-[2rem] overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[80px]">#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Acceptance</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-mono text-muted-foreground">{p.id}</TableCell>
                  <TableCell className="font-bold">{p.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-full text-[10px]">{p.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className={`text-xs font-semibold ${
                      p.difficulty === 'Easy' ? 'text-emerald-500' : 
                      p.difficulty === 'Medium' ? 'text-amber-500' : 'text-rose-500'
                    }`}>
                      {p.difficulty}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{p.acceptance}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="rounded-full gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Solve
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Practice;