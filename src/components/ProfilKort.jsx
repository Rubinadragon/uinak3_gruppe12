export default function ProfilKort({person}){
    return(
        <article>
            <p>{person.personnavn}</p>
            <a href={`mailto:${person.epost}`}>{person.epost}</a>
            <img
                src={person.profilbilde?.asset?.url}
                alt={person.profilbilde?.alt || "Profilbilde"}
            />
        </article>
    );
}