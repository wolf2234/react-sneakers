function Header() {
    return (
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
    );
}

export default Header;
