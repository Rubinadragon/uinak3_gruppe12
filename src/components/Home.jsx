import { Link } from "react-router-dom";
import ProfilKort from "./ProfilKort";
import Log from "./Log";


export default function Home({logs, persons}){
    return (
            <>            
            <section className="profiler">
                <h2>Gruppemedlemmer</h2>
                {persons?.map((person) => (
                <ProfilKort key={person._id} person={person} />
                ))}
            </section>

            <section>
                <h2>Arbeidslogg</h2>
                {logs?.map((loggRad) => (
                  <Log loggRad={loggRad} key={loggRad._id} loggData={logs}/>
                ))}
            </section>
        </>)
}