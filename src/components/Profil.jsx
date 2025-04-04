import { useParams } from "react-router";
import { fetchLogByPerson } from "../sanity/loggServices";
import { useEffect, useState } from "react";
import Log from "./Log";
import { personal } from "../sanity/testPersoner";

export default function Profil(){

    const { profile } = useParams();

    const [singleLogg, setSingleLogg] = useState([])
    const [personInfo, setPersonInfo] = useState([])

    const getPersonBySlug = async (profile) => {
        const data = await fetchLogByPerson(profile);
        setSingleLogg(data);
        setPersonInfo(personal[0])
    }

    useEffect(() => {
        getPersonBySlug(profile)
    }, [profile])

    console.log(personInfo)
    return(
        <>
            <section>
                <img src={personInfo?.profilbilde} alt=""/>
                <article>
                    <h1>{personInfo?.personnavn}</h1>
                    <p>{personInfo?.bio}</p>
                    <h2>Interesser</h2>
                    <ul>
                    {
                        personInfo.interesser?.map((interesse, index) => (
                            <li key={`interesse_${index}`}>{interesse}</li>
                        ))
                    }
                    </ul>
                </article>
            </section>
            <section>
                <h2>Arbeidslogg</h2>
                {
                    singleLogg?.map((loggRad) => (<Log loggRad={loggRad} key={loggRad._id}/>))
                }
            </section>
        </>
    )
}