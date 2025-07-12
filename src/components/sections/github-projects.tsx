
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Star, GitFork, Github as GithubIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-blue-400',
  HTML: 'bg-orange-600',
  CSS: 'bg-blue-600',
  "C++": 'bg-pink-600',
  Shell: 'bg-green-500',
  Java: 'bg-red-500',
  default: 'bg-muted-foreground',
};

async function getGithubRepos(): Promise<GithubRepo[] | null> {
  const username = 'AadityaPanda';
  const url = `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=20`;
  const reposToExclude = new Set(['portfolio', 'aadityapanda', 'motioncut-internship']);

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: {
        revalidate: 3600, // Revalidate cache every hour
      },
    });

    if (!response.ok) {
      console.error(`GitHub API responded with ${response.status}: ${await response.text()}`);
      return null;
    }

    const data: any[] = await response.json();
    const repos = data
      .filter(repo => 
        !repo.fork && 
        repo.description &&
        !reposToExclude.has(repo.name.toLowerCase())
      )
      .slice(0, 6)
      .map(repo => ({
        id: repo.id,
        name: repo.name.replace(/[-_]/g, ' '),
        html_url: repo.html_url,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
      }));

    return repos;
  } catch (error) {
    console.error('Failed to fetch GitHub repositories:', error);
    return null;
  }
}

export async function GithubProjects() {
  const repos = await getGithubRepos();

  if (!repos || repos.length === 0) {
    return null;
  }

  return (
    <div className="mt-24">
      <h3 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 animate-gradient-shimmer bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-primary via-accent to-primary flex items-center justify-center gap-4">
        <GithubIcon className="h-8 w-8 text-primary" />
        More on GitHub
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group"
          >
            <Card className="h-full flex flex-col bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors capitalize">{repo.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">{repo.description}</p>
              </CardContent>
              <div className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className={cn("w-3 h-3 rounded-full", languageColors[repo.language] || languageColors.default)} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
