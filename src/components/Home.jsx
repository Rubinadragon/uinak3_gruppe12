import { Link } from "react-router-dom";
import ProfilKort from "./ProfilKort";
import Log from "./Log";


export default function Home({logs, persons}){
    return (
            <>            
            <h2>
                Gruppemedlemmer
            </h2>
            <div className="profilkort">
                {persons?.map((person) => (
                <ProfilKort key={person._id} person={person} />
                ))}
            </div>

            <h2>
                Arbeidslogg
            </h2>
            <section>
                {logs?.map((loggRad) => (
                  <Log loggRad={loggRad} key={loggRad._id} loggData={logs}/>
                ))}
            </section>
        </>)
}