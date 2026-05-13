import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Profile = () => {
  const users = [
    {
      id: 1,
      name: "Ali",
      age: 25,
      city: "Cairo",
    },
    {
      id: 2,
      name: "Sara",
      age: 30,
      city: "Alexandria",
    },
    {
      id: 3,
      name: "Ahmed",
      age: 28,
      city: "Giza",
    },
    {
      id: 4,
      name: "Mona",
      age: 22,
      city: "Cairo",
    },
    {
      id: 5,
      name: "Omar",
      age: 35,
      city: "Alexandria",
    },
  ];

  function UserProfile() {
    return users.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <Link to={`/profile/${user.id}`}>View Details</Link>
      </div>
    ));
  }

  function UserDetails() {
    const { id } = useParams();
    const user = users.find((u) => u.id === Number(id));

    return (
      <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/profile/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default Profile;
