import React, { useEffect, useState } from "react";
interface IUser {
    id: number;
    name: string;
    phone: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
const StateFree = () => {
    const [listUsers, setListUsers] = useState<IUser[]>([]);

    console.log("listUsers api", listUsers);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users",
            );
            const data = await res.json();
            setListUsers(data);
        };

        fetchData();
    }, []);
    return (
        <div>
            StateFree
            <div className="flex flex-col gap-3 ">
                {listUsers.map((user) => (
                    <div className="border border-gray-200 rounded-lg ">
                        <h2>{user.name}</h2>
                        <h3>{user.phone}</h3>
                        <h4>{user.company.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StateFree;
