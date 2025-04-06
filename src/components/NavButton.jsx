import { Link } from "react-router-dom";

export default function NavButton()
{
    return (<li>
                <Link to="profile/:profile">Knapp</Link>
            </li>)
}