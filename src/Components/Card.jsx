import React, { useState } from "react";

const Card = () => {
    const [Like, setLike] = useState(0);
    function like() {
        let TLike = Like + 1;
        setLike(TLike);
                
    }
    return (
        <>
            <div className="card container" style={{width: "18rem"}}>
                <img src="https://getbootstrap.com/docs/5.3/assets/img/webpack.svg" className="card-img-top" alt="Blank"/>
                <div className="card-body">
                    <button className="btn btn-primary" onClick={()=>{like()}}>Like {Like}</button>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default Card;