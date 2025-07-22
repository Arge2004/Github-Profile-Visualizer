export interface userInfo {
  name: string | null;
  bio: string | null;
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  location: string | null;
  reposUrl: string;
}

export type repository = {
  name: string;
    description: string | null;
    html_url: string;
    license: {
      name: string;
    } | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

export type repositoriesInfo = repository[];