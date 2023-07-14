import React from "react";
// import userData from "../data/userData";
function Card(props) {
    return (
        <div className="flex-col justify-center items-center w-screen h-40 bg-violet-100">
            <div className="w-[50vw] h-20 flex justify-center items-center mx-auto">
                <img src={props.image} alt="person" className="w-30 h-20" />
            </div>
            <div className="w-[50-vw] h-20 flex-col justify-center items-center pt-3">
                <h3>Name: {props.name}</h3>
                <h4>Email: {props.email}</h4>
            </div>
        </div>
    );
}
export default Card;