// Maps project tags to tech-stack-icons names
export const tagToIconMap: Record<string, string> = {
  // Frontend
  "React": "react",
  "Vue": "vuejs",
  "Angular": "angular",
  "Next.js": "nextjs2",
  "Vite": "vitejs",
  
  // Backend
  "Node.js": "nodejs",
  "Django": "django",
  "PHP": "php",
  
  // Languages
  "TypeScript": "typescript",
  "JavaScript": "js",
  "Java": "java",
  "Python": "python",
  
  // Database
  "SQLite": "sqlite",
  "MySQL": "mysql",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Supabase": "supabase",
  
  // Styling
  "Tailwind CSS": "tailwindcss",
  "CSS3": "css3",
  "HTML5": "html5",
  
  // Tools & Others
  "Docker": "docker",
  "GraphQL": "graphql",
  "Git": "git",
  "GitHub": "github",
  "NPM": "npm",
  "Yarn": "yarn",
};

// Function to get icon name from tag
export function getIconName(tag: string): string | null {
  return tagToIconMap[tag] || null; // return null if not found
}
