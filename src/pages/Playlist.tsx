import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";
import { initialSongs, type Song } from "../data/songs.ts";
import SongCard from "../components/SongCard.tsx";
import ConfirmModal from "../modal/ConfirmModal.tsx";
import { useNavigate } from "react-router-dom";

type UserProps = {
    user: string | null
}

const Playlist = ({ user }: UserProps) => {
    const [songs, setSongs] = useState<Song[]>(initialSongs);
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);

    const { toggleTheme, theme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        setSongs((prev) => prev.filter((song) => song.id !== id));
    };

    const handleLogout = () => {
        navigate("/");
    }

    return (
        <div className={`app ${theme}`}>
            <div className="container">

                <div className="playlist-header">
                    <div className="header-left">
                        <h1>Shared Playlist</h1>
                        {user && <p className="welcome-text">Welcome, {user}</p>}
                    </div>
                    <button className="toggle" onClick={toggleTheme}>🌙 / ☀️</button>
                </div>

                {songs.length === 0 ? (
                    <div className="empty">
                        <p>Room is silent.... Pick a song</p>
                        <button onClick={() => setSongs(initialSongs)}>
                            Reload Playlist
                        </button>
                    </div>
                ) : (
                    <div className="songs-grid">
                        {songs.map((song) => (
                            <SongCard
                                key={song.id}
                                {...song}
                                onDelete={() => setSelectedSong(song)}
                            />
                        ))}
                    </div>
                )}

                {user && (
                    <div className="logout-container">
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </div>
                )}

                {selectedSong && (
                    <ConfirmModal
                        song={selectedSong}
                        onConfirm={() => {
                            handleDelete(selectedSong.id);
                            setSelectedSong(null);
                        }}
                        onCancel={() => setSelectedSong(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default Playlist;