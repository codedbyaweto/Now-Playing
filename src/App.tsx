import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {Toaster} from "react-hot-toast";
import Playlist from "./pages/Playlist.tsx";
import Login from "./pages/Login.tsx";
import {useState} from "react";
import "./App.css"

const App = () => {
    const [user, setUser] = useState<string | null>(null);

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Toaster />
                <Routes>
                    <Route path="/" element={<Login onLogin={(username) => setUser(username)}/>} />
                    <Route path="/playlist" element={<Playlist user={user}/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )

}

export default App;