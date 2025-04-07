import { Link } from "react-router-dom";

export default function ProfilKort({person}){
    return(
        <Link to={`profile/${person.personslug}`}> 
        <article>
            <p>{person.personnavn}</p>
            <a href={`mailto:${person.epost}`}>{person.epost}</a>
            <img
                src={person.profilbilde?.asset?.url}
                alt={person.profilbilde?.alt || "Profilbilde"}
            />
        </article>
        </Link>
    );
}