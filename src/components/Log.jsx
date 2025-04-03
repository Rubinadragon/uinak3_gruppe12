import "../assets/styles/log.scss";

export default function Log({loggRad}){
    return(
        <article>
        <span>{loggRad.loggdato}</span>
        {
            loggRad.loggpersoner.map((loggPerson, index) => (
                <span key={`person_${index}`}>{loggPerson.personnavn}
                {loggRad.loggpersoner.length > index + 1 ? ", " : ""}</span>
            ))
        }
        <span>{loggRad.loggbeskrivelse}</span>
        <span>{loggRad.loggtimer}</span>
    </article>
)
    
}