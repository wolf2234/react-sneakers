function calc(a, b) {
    return a + b;
}

function Drawer() {
    return (
        <div className="drawer d-flex flex-column">
            <h2 className="mb-20 sidebar__title d-flex justify-between">
                Basket
                <img
                    src="/img/outlined.png"
                    className="removeBtn cu-p"
                    width="20px"
                    height="20px"
                    alt="Remove"
                />
            </h2>

            <h1>{calc(7, 7)}</h1>

            <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                    <div
                        className="cartItemImg"
                        style={{
                            backgroundImage: `url(/img/chainick.png)`,
                        }}></div>

                    <div className="mr-20">
                        <p className="mb-5">Men Sneakers Nike Air Max 270</p>
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
                    <div
                        className="cartItemImg"
                        style={{
                            backgroundImage: `url(/img/chainick.png)`,
                        }}></div>

                    <div className="mr-20">
                        <p className="mb-5">Men Sneakers Nike Air Max 270</p>
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
                    <div
                        className="cartItemImg"
                        style={{
                            backgroundImage: `url(/img/chainick.png)`,
                        }}></div>

                    <div className="mr-20">
                        <p className="mb-5">Men Sneakers Nike Air Max 270</p>
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
                <button className="greenButton">
                    Order
                    <img
                        src="/img/arrow_white.png"
                        width="15px"
                        height="15px"
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
}

export default Drawer;
