import "../assets/styles/profile.scss"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPerson } from "../sanity/personServices";
import Log from "./Log";

export default function Profil(){

    const { profile } = useParams();    
    //const [hoursWorked, setHoursWorked] = useState(0);
    const [person, setPerson] = useState(null);

    const getPersonBySlug = async (profile) => {
        const personData = await fetchPerson(profile);
        setPerson(personData);
      };

    useEffect(() => {
        getPersonBySlug(profile)
    }, [profile]);

    /*const updateHoursWorked = (value) => {
        const tempHour = hoursWorked;
        setHoursWorked(tempHour + value)
    }*/

    return(
        <>
        {
            person && (
                <section id="profileSection">
                    <img src={person.profilbilde.asset.url} alt={person.profilbilde.alt} />
                    <article>
                        <h1>{person.personnavn}</h1>
                        <p>{person.bio}</p>
                        <h2>Interesser:</h2>
                        <ul className="interestList">
                            {person.interesser?.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </article>
                </section>
            )
        }
        <section className="logSection">
        {
            person?.personlogg.map((loggRad) => (
                <Log loggRad={loggRad} key={loggRad._id} loggData={person.personlogg}/>
            ))
        }
        <p>{/*hoursWorked */}</p>
        </section>
        </>
    );
}