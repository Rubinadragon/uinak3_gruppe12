import { Link, NavLink } from "react-router-dom";
import "../assets/styles/nav.scss"

export default function Nav({persons}){
    console.log(persons)
    return (
        <header>
            <section>
                <Link to="/" className="logo">Gruppe 12</Link>
                <nav>
                    <ul>
                        {
                            persons?.map((person) => (
                                <li key={person._id}>
                                    <NavLink to={`profile/${person.personslug}`}>{person.personnavn.split(" ")[0]}</NavLink>
                                </li>))
                        }
                    </ul>
                </nav>
            </section>
        </header>
    )
}