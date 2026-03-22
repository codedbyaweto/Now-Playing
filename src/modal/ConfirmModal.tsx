import {createPortal} from "react-dom";
import type {Song} from "../data/songs.ts";

type ConfirmModalProps = {
    song: Song;
    onConfirm: () => void;
    onCancel: () => void;
}
const ConfirmModal = ({song, onConfirm, onCancel}: ConfirmModalProps) => {

    const portalRoot = document.getElementById('portal-root');

    if (!portalRoot) {
        return <></>
    }

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h2>Final Call 🎧</h2>

                <p>Remove {song.title}
                    <br/>
                    Once gone.....The vibe cannot be undone
                </p>
                <button onClick={onConfirm}>Yes, remove it</button>
                <button onClick={onCancel}>Keep it</button>
            </div>
        </div>,
        portalRoot
    )
}

export default ConfirmModal;