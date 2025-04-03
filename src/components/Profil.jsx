import { useParams } from "react-router";
import { fetchLogByPerson } from "../sanity/loggServices";
import { useEffect, useState } from "react";
import Log from "./Log";

export default function Profil({loggData}){

    const { profile } = useParams();
    const [singleLogg, setSingleLogg] = useState([])

    const getPersonBySlug = async (profile) => {
        const data = await fetchLogByPerson(profile);
        setSingleLogg(data);
    }

    useEffect(() => {
        getPersonBySlug(profile)
    }, [profile])

    return(
        <>
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
            <article>
                <h3>Navn</h3>
                <p>Beskrivelse</p>
                {/*Sett bilde her*/}
                <p>Liste med interesser</p>
            </article>
            <section>
                <h3>Arbeidslogg</h3>
                {loggData?.map((loggRad) => (
                                  <Log loggRad={loggRad} key={loggRad._id}/>
                                ))}
            </section>
        </>
    )
}