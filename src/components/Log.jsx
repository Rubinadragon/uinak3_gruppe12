import "../assets/styles/Logg.scss";

export default function Log({ loggRad }) {

  const convertLogDateToString = (value) => {
    const datoSplit = value.split("-").reverse();
    return `${datoSplit[0]}-${datoSplit[1]}-${datoSplit[2]}`; 
  }
 
  return (
    <article className="article_logg">
      <span>{convertLogDateToString(loggRad.loggdato)}</span>

      <span className="loggpersoner-wrapper">
        {loggRad.loggpersoner.map((loggPerson, index) => (
          <span key={`person_${index}`}>
            {loggPerson.personnavn}
            {loggRad.loggpersoner.length > index + 1 ? ", " : ""}
          </span>
        ))}
      </span>
      <span>{loggRad.loggbeskrivelse}</span>
      <span>{`${loggRad.loggtimer} ${loggRad.loggtimer >= 2 ? "timer" : "time"}`}</span>
    </article>
  );
}