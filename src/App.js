import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay" style={{ display: "none" }}>
                <Drawer />
            </div>
            <Header />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="mb-40">Все товары</h1>
                    <div className="search-block d-flex align-center">
                        <img
                            src="/img/search.png"
                            width="20px"
                            height="20px"
                            alt="Search"
                        />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="d-flex">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
