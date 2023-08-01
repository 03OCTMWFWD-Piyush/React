import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            {/* Home comopnent with list of other comopnent links */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="admin">Admin</Link>
                </li>
                <li>
                    <Link to="user">User</Link>
                </li>
            </ul>
        </>
    )
}