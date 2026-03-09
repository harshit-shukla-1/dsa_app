export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  url: string;
}

export interface Topic {
  id: string;
  title: string;
  category: "Data Structures" | "Algorithms";
  difficulty: Difficulty;
  description: string;
  longDescription: string;
  patterns: string[];
  visualType: "array" | "linked-list" | "tree" | "graph" | "string";
  problems: Problem[];
}

export const dsaTopics: Topic[] = [
  {
    id: "arrays-basics",
    title: "Arrays & Strings",
    category: "Data Structures",
    difficulty: "Beginner",
    description: "The foundation of data storage. Learn about contiguous memory, indexing, and basic manipulations.",
    longDescription: "Arrays are the most fundamental data structure. They store elements in contiguous memory locations, allowing for constant-time access by index. Strings are essentially arrays of characters with additional utility methods.",
    patterns: ["Two Pointers", "Sliding Window", "Prefix Sum"],
    visualType: "array",
    problems: [
      { id: "p1", title: "Two Sum", difficulty: "Beginner", url: "#" },
      { id: "p2", title: "Maximum Subarray", difficulty: "Beginner", url: "#" },
      { id: "p3", title: "Reverse String", difficulty: "Beginner", url: "#" }
    ]
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    category: "Data Structures",
    difficulty: "Beginner",
    description: "Understanding dynamic memory allocation through nodes and pointers. Essential for stack/queue implementations.",
    longDescription: "A linked list is a linear data structure where elements are not stored in contiguous memory. Instead, each element (node) contains a pointer to the next node in the sequence.",
    patterns: ["Fast & Slow Pointers", "In-place Reversal"],
    visualType: "linked-list",
    problems: [
      { id: "p4", title: "Reverse Linked List", difficulty: "Beginner", url: "#" },
      { id: "p5", title: "LinkedList Cycle", difficulty: "Beginner", url: "#" },
      { id: "p6", title: "Merge Two Sorted Lists", difficulty: "Beginner", url: "#" }
    ]
  },
  {
    id: "recursion-backtracking",
    title: "Recursion & Backtracking",
    category: "Algorithms",
    difficulty: "Intermediate",
    description: "Mastering the art of solving problems by breaking them down into smaller sub-problems.",
    longDescription: "Recursion is a method of solving problems where the solution depends on solutions to smaller instances of the same problem. Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally.",
    patterns: ["Decision Trees", "Pruning", "State Space Search"],
    visualType: "tree",
    problems: [
      { id: "p7", title: "Permutations", difficulty: "Intermediate", url: "#" },
      { id: "p8", title: "Subset Sum", difficulty: "Intermediate", url: "#" },
      { id: "p9", title: "N-Queens", difficulty: "Advanced", url: "#" }
    ]
  },
  {
    id: "trees-graphs",
    title: "Trees & Graphs",
    category: "Data Structures",
    difficulty: "Intermediate",
    description: "Hierarchical and networked data representation. BFS, DFS, and topological sorting.",
    longDescription: "Trees and graphs represent relationships between data. Trees are hierarchical, while graphs can represent any complex network. Traversing these structures is key to many algorithmic problems.",
    patterns: ["Level Order Traversal", "Depth First Search", "Island Pattern"],
    visualType: "graph",
    problems: [
      { id: "p10", title: "Binary Tree Inorder Traversal", difficulty: "Beginner", url: "#" },
      { id: "p11", title: "Number of Islands", difficulty: "Intermediate", url: "#" },
      { id: "p12", title: "Course Schedule", difficulty: "Advanced", url: "#" }
    ]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    category: "Algorithms",
    difficulty: "Advanced",
    description: "Optimizing recursive solutions using memoization and tabulation. The peak of problem-solving.",
    longDescription: "Dynamic Programming is an optimization technique that solves complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant computations.",
    patterns: ["0/1 Knapsack", "Longest Common Subsequence", "Palindromic Subsequence"],
    visualType: "array",
    problems: [
      { id: "p13", title: "Climbing Stairs", difficulty: "Beginner", url: "#" },
      { id: "p14", title: "Coin Change", difficulty: "Intermediate", url: "#" },
      { id: "p15", title: "Longest Increasing Subsequence", difficulty: "Advanced", url: "#" }
    ]
  }
];