import { AnimeVideoType } from "@/app/anime/[anime]/[anime_id]/page";
import ReactPlayer from "react-player";

type Props = {
    video: AnimeVideoType;
    index: number;
};
export default function AnimeVideo({ video, index }: Props) {
    if (video.url.startsWith("https://vk.com")) {
        return <h3>Video not Available</h3>;
    }
    return (
        <div className="w-full">
            <ReactPlayer
                key={video.url}
                url={video.url}
                width="100%"
                height="auto"
            />
        </div>
    );
}
