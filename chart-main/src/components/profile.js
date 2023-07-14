import React from "react";
import userData from "../data/userData";
import Card from "./Card";
function createEntry(user) {
    return (
        <Card
            key={user.user_id}
            name={user.name}
            email={user.email}
            image={user.image}
        />
    );
}
function Profile() {
    const finalData = userData.filter((user) => user.given_name === 'Hello');
    console.log(finalData);
    return (
        <div className="profile-parent">
            {finalData.map(createEntry)}
        </div>
    );
}
export default Profile;