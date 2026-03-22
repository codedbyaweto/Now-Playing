import { type ChangeEvent, type SubmitEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ThemeContext } from "../context/ThemeContext";

type LoginProps = {
    onLogin: (username: string) => void;
};

const Login = ({ onLogin }: LoginProps) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            toast.error("Username and Password is required");
            return;
        }

        onLogin(username);
        toast.success(`Welcome back ${username}!`);

        setTimeout(() => {
            navigate("/playlist");
        }, 1500);
    };

    return (
        <div className={`app ${theme}`}>
            <div className="login-wrapper">
                <div className="login-container">
                    <h1>Now Playing 🎧</h1>

                    <form onSubmit={handleSubmit}>
                        <input
                            name="Username"
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setUsername(e.target.value)
                            }
                            placeholder="Enter username"
                        />

                        <input
                            name="Password"
                            type="password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Password"
                        />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;