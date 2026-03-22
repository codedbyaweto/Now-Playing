import { type Song } from "../data/songs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface SongCardProps extends Song {
    onDelete: () => void;
}

const SongCard = ({title, artist, genre, duration, trackNumber, image, audio, onDelete}: SongCardProps) => {
    const { theme } = useContext(ThemeContext);

    const genreColors: Record<string, string> = {
        "Electronic": "#8a2be2",
        "Hip-Hop": "#ffa500",
        "YVL": "#ff69b4",
        "R&B": "#1e90ff",
        "Afro-Beats": "#32cd32",
    };

    return (
        <div
            style={{ borderLeft: `5px solid ${genreColors[genre] || "#ccc"}` }}
            className={`card ${theme}`}
        >
            <img src={image} alt={title} className="track-image" />

            <h3>{trackNumber}. {title}</h3>
            <span>{genre}. {duration}</span>
            <p>{artist}</p>

            <audio src={audio} controls />

            <button className="toggle" onClick={onDelete}>
                Remove Track
            </button>
        </div>
    );
};

export default SongCard;

