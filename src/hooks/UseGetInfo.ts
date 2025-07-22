// src/hooks/useGitHubInfo.ts
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import type {
  userInfo,
  repositoriesInfo,
  repository,
} from "../types/UserTypes";

// Hook para obtener usuario
export function useFetchUser(username: string) {
  const [user, setUser] = useState<userInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/github?username=${username}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
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
        setUser(formattedUser);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return { user, loading, error };
}

// Hook para obtener repositorios del usuario actual
export function useFetchRepositories() {
  const { user } = useUser(); // este es tu contexto
  const [repositories, setRepositories] = useState<repositoriesInfo>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!user?.reposUrl) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/github?username=${user.login}&type=repos`);
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
        setRepositories(repos);
        console.log("Fetched repositories:", repos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [user]);

  return { repositories, setRepositories, loading, error };
}
