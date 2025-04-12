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
        <section>
        {
            person && (
                <article>
                    <img src={person.profilbilde?.asset?.url} alt={person.profilbilde?.alt} />
                    <h3>{person.personnavn}</h3>
                    <p>{person.bio}</p>
                    <p>Interesser:</p>
                    <ul>
                        {person.interesser?.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </article>
            )
        }
        </section>
        <section>
        {
            singleLogg?.map((loggRad) => (
                <Log loggRad={loggRad} key={loggRad._id} loggData={singleLogg}/>
            ))
        }
        </section>
        </>
    );
}