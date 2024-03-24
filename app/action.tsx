"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import Link from "next/link";

export async function fetchAnime(page: number) {
    const response = await fetch(
        `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
    );
    const data = await response.json();
    return data.map((item: AnimeProp, index: number) => (
        <Link href={`/anime/${item.name}/${item.id}`} key={item.id}>
            <AnimeCard
                key={item.id}
                anime={item}
                index={index}
                name={item.name}
            />
        </Link>
    ));
}

export async function searchAnime(search: string) {
  
    const response = await fetch(
        `https://shikimori.one/api/animes?search=${search}`
    );
    const data = await response.json();
    return data.map((item: AnimeProp, index: number) => (
        <Link href={`/anime/${item.name}/${item.id}`} key={item.id}>
            <div className="max-w-lg mx-auto p-10">
                <AnimeCard
                    key={item.id}
                    anime={item}
                    index={index}
                    name={item.name}
                />
            </div>
        </Link>
    ));
   }


export async function fetchAnimeVideos(anime_id: number) {
    const response = await fetch(
        `https://shikimori.one/api/animes/${anime_id}/videos`
    );
    const data = await response.json();
    return data;
}
