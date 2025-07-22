import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/Search.svg";
import { useFetchUser } from "../../hooks/UseGetInfo";
import { useUser } from "../../context/UserContext";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { user, setUser } = useUser();
  const { user: userFetch } = useFetchUser(searchTerm);// solo se dispara cuando `debouncedTerm` cambia

  const handleClick = () => { 
    if (searchTerm.trim() !== "") {
      setUser(userFetch);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setUser(userFetch);
      setSearchTerm("");
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
