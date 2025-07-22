// src/hooks/useGitHubInfo.ts
import { useState } from "react";
import type {
  userInfo,
  repositoriesInfo,
  repository,
  notFound,
} from "../types/UserTypes";
import { useUser } from "../context/UserContext";

// Hook para obtener usuario
export function useFetchUser() {
  const { setLoading } = useUser();
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = async (username: string): Promise<userInfo | notFound | null> => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/github?username=${username}`);
      const data = await res.json();
      if (data.status==="404") {
        return data as notFound;
      }
      const formattedUser: userInfo = {
        login: data.login,
        name: data.name || null,
        bio: data.bio || null,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        followers: data.followers,
        following: data.following,
        location: data.location || null,
        reposUrl: data.repos_url,
      };
      return formattedUser;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {error, fetchUser };
}

// Hook para obtener repositorios del usuario actual
export function useFetchRepositories() {
  const { setLoading } = useUser();
  const [error, setError] = useState<unknown>(null);

  const fetchRepos = async (username: string): Promise<repositoriesInfo | null> => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/github?username=${username}&type=repos`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const repos: repositoriesInfo = data.map((repo: repository) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        license: repo.license ? { name: repo.license.name } : null,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
      }));
      return repos;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchRepos, error };
}
