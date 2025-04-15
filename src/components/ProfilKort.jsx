import { Link } from "react-router-dom";
import "../assets/styles/profilkort.scss";

export default function ProfilKort({person}){
    return(
        <Link to={`profile/${person.personslug}`} className="profilkort"> 
        <article>
            <p>{person.epost}</p>
            <p>{person.personnavn}</p>
            <img
                src={person.profilbilde?.asset?.url}
                alt={person.profilbilde?.alt || "Profilbilde"}
            />
        </article>
        </Link>
    );
}