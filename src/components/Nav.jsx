import { Link } from "react-router-dom";
import "../assets/styles/nav.scss"

export default function Nav({persons}){
    console.log(persons)
    return (
    <>
        <h1><Link to="/">Gruppe 12</Link></h1>
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