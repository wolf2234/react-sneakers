import "./App.css";

function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="headerLeft d-flex align-center">
                    <img
                        src="/img/logo-vine.png"
                        className="headerImg"
                        width="45px"
                        height="45px"
                    />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Lorem Lorem Lorem</p>
                    </div>
                </div>
                <ul className="headerRight d-flex align-center">
                    <li className="mr-30 d-flex align-center">
                        <img
                            src="/img/free-icon-shop.png"
                            width="20px"
                            height="20px"
                        />
                        <span>$34</span>
                    </li>
                    <li className=" d-flex align-center">
                        <img
                            src="/img/user-profile.png"
                            width="20px"
                            height="20px"
                        />
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <h1 className="mb-30">Все товары</h1>
                <div className="d-flex ">
                    <div className="card">
                        <img
                            src="/img/chainick.png"
                            alt=""
                            width="130px"
                            height="150px"
                        />
                        <h5>Lorem Lorem Lorem Nike Brush</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$1245</b>
                            </div>
                            <button className="button">
                                <img
                                    src="/img/buy-button.png"
                                    width="40px"
                                    height="35px"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="/img/chainick.png"
                            alt=""
                            width="130px"
                            height="150px"
                        />
                        <h5>Lorem Lorem Lorem Nike Brush</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$1245</b>
                            </div>
                            <button className="button">
                                <img
                                    src="/img/buy-button.png"
                                    width="40px"
                                    height="35px"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="/img/chainick.png"
                            alt=""
                            width="130px"
                            height="150px"
                        />
                        <h5>Lorem Lorem Lorem Nike Brush</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$1245</b>
                            </div>
                            <button className="button">
                                <img
                                    src="/img/buy-button.png"
                                    width="40px"
                                    height="35px"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="/img/chainick.png"
                            alt=""
                            width="130px"
                            height="150px"
                        />
                        <h5>Lorem Lorem Lorem Nike Brush</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$1245</b>
                            </div>
                            <button className="button">
                                <img
                                    src="/img/buy-button.png"
                                    width="40px"
                                    height="35px"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
