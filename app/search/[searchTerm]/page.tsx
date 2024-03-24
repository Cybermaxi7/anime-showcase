"use client";

import { searchAnime } from "@/app/action";
import Loader from "@/app/anime/[anime]/[anime_id]/loading";
import BackButton from "@/components/BackButton";
import { AnimeCard } from "@/components/LoadMore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResult({
    params,
}: {
    params: { searchTerm: string };
}) {
    const [data, setData] = useState<AnimeCard[]>([]);
    const [error, setError] = useState("");
    console.log("data", data);
    useEffect(
        function () {
            if (params.searchTerm) {
                searchAnime(params.searchTerm)
                    .then((data) => setData(data))
                    .catch((error) => {
                        setError(error);
                    });
            }
        },
        [params.searchTerm]
    );
    // if (data.length === 0) return Loader;
    if (data.length === 0)
        return (
            <>
                <div className="px-10 flex justify-end">
                    <BackButton />
                </div>
                <h2 className="bg-gray-500 m-10 p-2 font-bold">
                    We Could not find that anime, search for another
                </h2>
            </>
        );
    return (
        <>
            <div className="px-10 flex justify-end">
                <BackButton />
            </div>
            <div>{data}</div>
        </>
    );
}
