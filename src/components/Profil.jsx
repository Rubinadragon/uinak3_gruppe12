import { useParams } from "react-router-dom";
import { fetchLogByPerson } from "../sanity/loggServices";
import { useEffect, useState } from "react";
import { fetchPerson } from "../sanity/personServices";

export default function Profil(){

    const { profile } = useParams();    
    const [singleLogg, setSingleLogg] = useState([]);
    const [person, setPerson] = useState(null);
    


    const getPersonBySlug = async (profile) => {
        const personData = await fetchPerson(profile);
        const data = await fetchLogByPerson(profile);
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

        {
            singleLogg?.map((loggRad) => (
                <article key={loggRad._id}>
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
            ))
        }
        </>
    );
}