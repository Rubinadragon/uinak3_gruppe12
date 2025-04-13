import "../assets/styles/profile.scss"

import { useParams } from "react-router-dom";
import { fetchLogByPersonSlug } from "../sanity/loggServices";
import { useEffect, useState } from "react";
import { fetchPerson } from "../sanity/personServices";
import Log from "./Log";

export default function Profil(){

    const { profile } = useParams();    
    const [singleLogg, setSingleLogg] = useState([]);
    const [person, setPerson] = useState(null);


    const getPersonBySlug = async (profile) => {
        const personData = await fetchPerson(profile);
        const data = await fetchLogByPersonSlug(profile);
        setPerson(personData);
        setSingleLogg(data);
      };

    useEffect(() => {
        getPersonBySlug(profile)
    }, [profile]);

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
            singleLogg?.map((loggRad) => (
                <Log loggRad={loggRad} key={loggRad._id} loggData={singleLogg}/>
            ))
        }
        </section>
        </>
    );
}