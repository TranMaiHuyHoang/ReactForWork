import type { IUser } from "@/models/User";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const StateUser1 = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users",
            );
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
                User List
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <UserCard user={user}/>
                ))}
            </div>
        </div>
    );
};

export default StateUser1;
