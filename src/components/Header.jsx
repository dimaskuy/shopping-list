import { quotes } from "./App.jsx";

export default function Header() {
    return (
        <header className="title" id="list-menu">
            <h1>Catatan Belanjaku 📝</h1>
            <h2>
                created by,{" "}
                <a href="https://github.com/dimaskuy/" target="_blank" rel="noopener noreferrer">
                    DimasRS
                </a>
                !
            </h2>
            <h3 className="quote-mobile">{quotes}</h3>
        </header>
    );
}
