import { Link } from "react-router-dom";
import "../assets/styles/nav.scss"

export default function Nav({persons}){
    console.log(persons)
    return (
    <>
        <Link to="/" className="logo">Gruppe 12</Link>
        <ul>
            {
                persons?.map((person) => (
                    <li key={person._id}>
                        <Link to={`profile/${person.personslug}`}>{person.personnavn}</Link>
                    </li>))
            }
        </ul>
    </>)
}