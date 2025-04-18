import "../assets/styles/profile.scss";
import "../assets/styles/Logg.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPerson } from "../sanity/personServices";
import Log from "./Log";

export default function Profil() {
  const { profile } = useParams();
  const [person, setPerson] = useState(null);

  const getPersonBySlug = async (profile) => {
    const personData = await fetchPerson(profile);
    setPerson(personData);
  };

  useEffect(() => {
    getPersonBySlug(profile);
  }, [profile]);

  let hoursWorked = 0;

  return (
    <>
      {person ? (
        <section id="profileSection">
          <img
            src={person.profilbilde.asset.url}
            alt={person.profilbilde.alt}
          />
          <article>
            <h1>{person.personnavn}</h1>
            <p>{person.bio}</p>
            <h2>Interesser:</h2>
            <ul className="interestList">
              {person.interesser?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      ) : (
        <section id="profileSection">
          <h1>Ingen person funnet med navn: {profile}.</h1>
        </section>
      )}

    <h2 className="arbeidslogg-title">Arbeidslogg</h2>
      <section id="logSection" className="arbeidslogg-box">        
        <section className="arbeidslogg-section">
          {person?.personlogg.map((loggRad) => {
            hoursWorked += loggRad.loggtimer;
            return (
              <Log
                loggRad={loggRad}
                key={loggRad._id}
                loggData={person.personlogg}
              />
            );
          })}
          {person ? <p>Timer totalt: {hoursWorked}</p> : ""}
        </section>
      </section>
    </>
  );
}