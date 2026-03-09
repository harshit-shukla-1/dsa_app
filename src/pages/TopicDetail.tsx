"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, CheckCircle2, BookOpen, Terminal, PlayCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { dsaTopics } from '@/data/dsaContent';
import VisualRepresentation from '@/components/dsa/VisualRepresentation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TopicDetail = () => {
  const { id } = useParams();
  const topic = dsaTopics.find(t => t.id === id);

  if (!topic) return <div>Topic not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-12">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Curriculum
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="rounded-full">{topic.category}</Badge>
                <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 border-none">{topic.difficulty}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{topic.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {topic.longDescription}
              </p>
            </header>

            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <PlayCircle className="text-primary h-6 w-6" />
                  Interactive Visualizer
                </h2>
                <Button variant="ghost" size="sm" className="text-xs">Reset Animation</Button>
              </div>
              <div className="bg-card border rounded-3xl p-8 shadow-sm">
                <VisualRepresentation type={topic.visualType} />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="text-primary h-6 w-6" />
                Key Concepts & Patterns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.patterns.map((pattern, i) => (
                  <Card key={i} className="border-none bg-muted/30 rounded-2xl">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{pattern}</h4>
                        <p className="text-xs text-muted-foreground">Common pattern used to solve {topic.title} problems efficiently.</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <Card className="rounded-[2rem] border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  Practice Problems
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topic.problems.map((prob) => (
                  <a 
                    key={prob.id} 
                    href={prob.url} 
                    className="flex items-center justify-between p-3 rounded-xl bg-background border hover:border-primary/50 transition-all group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-sm group-hover:text-primary transition-colors">{prob.title}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">{prob.difficulty}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                ))}
                <Button className="w-full mt-4 rounded-xl">View More on LeetCode</Button>
              </CardContent>
            </Card>

            <div className="bg-muted/50 p-6 rounded-[2rem] border space-y-4">
              <h4 className="font-bold text-sm">Prerequisites</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Basic Programming Syntax
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Time Complexity (Big O)
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default TopicDetail;