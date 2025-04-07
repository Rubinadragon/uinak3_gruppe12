import { Link } from "react-router";

export default function NavButton({peopleData})
{
    //console.log(peopleData)
    return (<li>
                <Link to={`profile/:${peopleData.personslug}`}>{peopleData.personnavn}</Link>
            </li>)
}