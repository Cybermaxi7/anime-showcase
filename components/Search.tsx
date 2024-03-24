"use client"
import { searchAnime } from "@/app/action";
import { AnimeProp } from "./AnimeCard";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimeCard } from "./LoadMore";
export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState("")
       const handleSearch = (e:  FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // searchAnime(search).then((value) => setData(value))
        // if(data) {
            router.push(`/search/${search}`)
        
       }

    return (
      <form onSubmit={handleSearch} className="w-full md:w-[32rem] ml-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Animes here..."
            className="w-full bg-transparent border-b p-2 outline-none text-sm md:text-lg text-gray-400 border-none border-b-gray-400"
        />
        <button type="submit" hidden>Search</button>
      </form>
    );
}
