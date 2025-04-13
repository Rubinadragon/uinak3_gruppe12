import "../assets/styles/log.scss";

export default function Log({loggRad}){
    return(
        <article id="logRow">
        <span id="loggdato">{loggRad.loggdato}</span>
        {
            loggRad.loggpersoner.map((loggPerson, index) => (
                <span id="loggperson" key={`person_${index}`}>{loggPerson.personnavn}
                {loggRad.loggpersoner.length > index + 1 ? ", " : ""}</span>
            ))
        }
        <span id="loggbeskrivelse">{loggRad.loggbeskrivelse}</span>
        <span id="loggtid">{loggRad.loggtimer}</span>
    </article>
)
    
}