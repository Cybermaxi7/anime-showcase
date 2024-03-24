"use client";
import Loading from "./loading";
import { fetchAnimeVideos } from "@/app/action";
import AnimeVideo from "@/components/AnimeVideo";
import { useEffect, useState } from "react";
export interface AnimeVideoType {
    id: number;
    image_url: string;
    url: string;
    kind: string;
    hosting: number;
    player_url: string;
    name: string;
}
export default function AnimeVideosLists({
    params,
}: {
    params: { anime_id: number; anime: string };
}) {
    const [videosList, setVideosList] = useState<AnimeVideoType[]>([]);
    useEffect(
        function () {
            if (params.anime_id) {
                fetchAnimeVideos(params.anime_id).then((data) =>
                    setVideosList(data)
                );
            }
        },
        [params.anime_id]
    );
    return (
        <div className="w-full sm:p-16 py-16 px-8">
            <h2 className="text-3xl text-white font-bold">
                Check Out Clips on{" "}
                <span className="font-bold text-orange-500 italic">
                    {decodeURIComponent(params.anime)}
                </span>
            </h2>
            {videosList.length === 0 ? (
                <Loading />
            ) : (
                <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center items-center mt-10">
                    {videosList.map((video) => (
                        <AnimeVideo
                            index={video.id}
                            video={video}
                            key={video.id}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}
