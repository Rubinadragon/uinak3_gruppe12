import { Link } from "react-router";

export default function NavButton()
{
    return (<li>
                <Link to="profile/:profile">Knapp</Link>
            </li>)
}