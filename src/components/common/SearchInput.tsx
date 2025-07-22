import React, { useState} from "react";
import searchIcon from "../../assets/Search.svg";
import { useFetchUser, useFetchRepositories } from "../../hooks/UseGetInfo";
import { useUser } from "../../context/UserContext";
import type { userInfo, notFound } from "../../types/UserTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNotFound(data: any): data is notFound {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.message === "string" &&
    typeof data.documentation_url === "string" &&
    typeof data.status === "string"
  );
}

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setUser, setRepositories, setNotFound } = useUser();
  const { fetchUser } = useFetchUser();
  const { fetchRepos } = useFetchRepositories();

  const handleClick = async () => {
    const data = await fetchUser(searchTerm);
    if (isNotFound(data)) {
      console.error("User not found");
      setNotFound(true);
      setTimeout(() => {
        setNotFound(false);
        setUser(null)
      }, 2000);

      return;
    }
    
    const repositoriesData = await fetchRepos(searchTerm);
    if (data && repositoriesData) {
      setSearchTerm("");
      setUser(data as userInfo);
      setRepositories(repositoriesData);
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleClick();
    }

  };


  return (
    <div className="bg-primary-color rounded-xl px-2 flex justify-center align-middle max-w-11/12 sm:max-w-[600px] mx-auto">
      <button
        className="cursor-pointer transition-transform duration-400"
        onClick={handleClick}
      >
        <img
          className="hover:scale-130 transition-transform duration-200"
          src={searchIcon}
          alt="Search"
        />
      </button>
      <input
        className="p-4 text-primary-font placeholder:text-primary-font w-11/12 focus:outline-none"
        type="search"
        name="githubUser"
        id="githubUser"
        value={searchTerm}
        placeholder="username"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
