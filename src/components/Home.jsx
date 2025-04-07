import { Link } from "react-router-dom";
import ProfilKort from "./ProfilKort";
import Log from "./Log";


export default function Home({loggData, personer}){
    return (
            <>            
            <h2>
                Gruppemedlemmer
            </h2>
            <div className="profilkort">
                {personer?.map((person) => (
                <ProfilKort key={person._id} person={person} />
                ))}
            </div>

            <h2>
                Arbeidslogg
            </h2>
            <section>
                {loggData?.map((loggRad) => (
                  <Log loggRad={loggRad} key={loggRad._id} loggData={loggData}/>
                ))}
            </section>
        </>)
}