function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img
                    src="/img/heart_icon.png"
                    width="20px"
                    height="20px"
                    alt="like"
                />
            </div>
            <img src="/img/chainick.png" alt="" width="130px" height="150px" />
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
    );
}

export default Card;
