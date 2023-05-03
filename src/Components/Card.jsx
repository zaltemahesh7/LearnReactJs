import React, { useState } from "react";

const Card = (props) => {
    const [Like, setLike] = useState(0);
    function like() {
        let TLike = Like + 1;
        setLike(TLike);

    }
    return (
        <>
            <div className="card container my-3" style={{ width: "18rem" }}>
                <img src={props.imgUrl} className="card-img-top my-2" alt="Blank" />
                <div className="card-body">
                    <button className="btn btn-primary" onClick={() => { like() }}><img className="w-25 p-3" src="https://t4.ftcdn.net/jpg/05/59/87/67/240_F_559876787_WDYJAsIFOT4YtUbTMIb8PjqXLTBnvYak.webp" alt="like" srcset="" />
                        {Like}</button>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default Card;