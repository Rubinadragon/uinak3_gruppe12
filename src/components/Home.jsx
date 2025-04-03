import { Link } from "react-router";
import ProfilKort from "./ProfilKort";
import Log from "./Log";


export default function Home({loggData}){
    return (<>
            <h2>
                Overskrift
            </h2>
            <ProfilKort/>
            <section>
                {loggData?.map((loggRad) => (
                  <Log loggRad={loggRad} key={loggRad._id} loggData={loggData}/>
                ))}
            </section>
        </>)
}