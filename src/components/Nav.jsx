import { Link } from "react-router-dom";

export default function Nav({persons}){
    console.log(persons)
    return (
    <>
        <h1><Link to="/">Test</Link></h1>
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