import "./App.css";

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer d-flex flex-column">
                    <h2 className="mb-20">Basket</h2>
                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            {/* <img
                                src="/img/chainick.png"
                                alt=""
                                width="70px"
                                height="70px"
                                className="mr-20"
                            /> */}
                            <div
                                className="cartItemImg"
                                style={{
                                    backgroundImage: `url(/img/chainick.png)`,
                                }}></div>

                            <div className="mr-20">
                                <p className="mb-5">
                                    Men Sneakers Nike Air Max 270
                                </p>
                                <b>$12 568</b>
                            </div>
                            <img
                                src="/img/outlined.png"
                                className="removeBtn"
                                width="20px"
                                height="20px"
                                alt="Remove"
                            />
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            {/* <img
                                src="/img/chainick.png"
                                alt=""
                                width="70px"
                                height="70px"
                                className="mr-20"
                            /> */}
                            <div
                                className="cartItemImg"
                                style={{
                                    backgroundImage: `url(/img/chainick.png)`,
                                }}></div>

                            <div className="mr-20">
                                <p className="mb-5">
                                    Men Sneakers Nike Air Max 270
                                </p>
                                <b>$12 568</b>
                            </div>
                            <img
                                src="/img/outlined.png"
                                className="removeBtn"
                                width="20px"
                                height="20px"
                                alt="Remove"
                            />
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            {/* <img
                                src="/img/chainick.png"
                                alt=""
                                width="70px"
                                height="70px"
                                className="mr-20"
                            /> */}
                            <div
                                className="cartItemImg"
                                style={{
                                    backgroundImage: `url(/img/chainick.png)`,
                                }}></div>

                            <div className="mr-20">
                                <p className="mb-5">
                                    Men Sneakers Nike Air Max 270
                                </p>
                                <b>$12 568</b>
                            </div>
                            <img
                                src="/img/outlined.png"
                                className="removeBtn"
                                width="20px"
                                height="20px"
                                alt="Remove"
                            />
                        </div>
                    </div>
                    <div className="cartTotalBlock">
                        <ul>
                            <li className="d-flex align-center justify-between">
                                <span>Count:</span>
                                <div></div>
                                <b>$41 756</b>
                            </li>
                            <li className="d-flex align-center justify-between">
                                <span>Tag 5%</span>
                                <div></div>
                                <b>$1074</b>
                            </li>
                        </ul>
                        <button>Order</button>
                    </div>
                </div>
            </div>

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
                        <p className="opacity-5">Lorem Lorem Lorem</p>
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
                    <div className="card">
                        <div className="favorite">
                            <img
                                src="/img/heart_icon.png"
                                width="20px"
                                height="20px"
                                alt="like"
                            />
                        </div>
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
                        <div className="favorite">
                            <img
                                src="/img/heart_icon.png"
                                width="20px"
                                height="20px"
                                alt="like"
                            />
                        </div>
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
                        <div className="favorite">
                            <img
                                src="/img/heart_icon.png"
                                width="20px"
                                height="20px"
                                alt="like"
                            />
                        </div>
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
                        <div className="favorite">
                            <img
                                src="/img/heart_icon.png"
                                width="20px"
                                height="20px"
                                alt="like"
                            />
                        </div>
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
