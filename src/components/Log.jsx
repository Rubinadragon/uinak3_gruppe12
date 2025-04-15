import "../Logg.scss";

export default function Log({loggRad}){
    return(
        <article className="article_logg">
        <span>{loggRad.loggdato}</span>
        
        <span className="loggpersoner-wrapper">
        {
            loggRad.loggpersoner.map((loggPerson, index) => (
                <span key={`person_${index}`}>{loggPerson.personnavn}
                {loggRad.loggpersoner.length > index + 1 ? ", " : ""}</span>
            ))
        }
        </span>
        
        <span>{loggRad.loggbeskrivelse}</span>
        <span>{loggRad.loggtimer}</span>
    </article>
)
    
}