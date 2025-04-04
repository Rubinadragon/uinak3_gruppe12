import { Link } from "react-router";

export default function NavButton({peopleData})
{
    return (<li>
                <Link to="profile/:profile">{peopleData.personnavn}</Link>
            </li>)
}