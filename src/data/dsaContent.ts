export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Topic {
  id: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  description: string;
  patterns: string[];
  visualType: "array" | "linked-list" | "tree" | "graph" | "string";
}

export const dsaTopics: Topic[] = [
  {
    id: "arrays-basics",
    title: "Arrays & Strings",
    category: "Data Structures",
    difficulty: "Beginner",
    description: "The foundation of data storage. Learn about contiguous memory, indexing, and basic manipulations.",
    patterns: ["Two Pointers", "Sliding Window", "Prefix Sum"],
    visualType: "array"
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    category: "Data Structures",
    difficulty: "Beginner",
    description: "Understanding dynamic memory allocation through nodes and pointers. Essential for stack/queue implementations.",
    patterns: ["Fast & Slow Pointers", "In-place Reversal"],
    visualType: "linked-list"
  },
  {
    id: "recursion-backtracking",
    title: "Recursion & Backtracking",
    category: "Algorithms",
    difficulty: "Intermediate",
    description: "Mastering the art of solving problems by breaking them down into smaller sub-problems.",
    patterns: ["Decision Trees", "Pruning", "State Space Search"],
    visualType: "tree"
  },
  {
    id: "trees-graphs",
    title: "Trees & Graphs",
    category: "Data Structures",
    difficulty: "Intermediate",
    description: "Hierarchical and networked data representation. BFS, DFS, and topological sorting.",
    patterns: ["Level Order Traversal", "Depth First Search", "Island Pattern"],
    visualType: "graph"
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    category: "Algorithms",
    difficulty: "Advanced",
    description: "Optimizing recursive solutions using memoization and tabulation. The peak of problem-solving.",
    patterns: ["0/1 Knapsack", "Longest Common Subsequence", "Palindromic Subsequence"],
    visualType: "array"
  }
];