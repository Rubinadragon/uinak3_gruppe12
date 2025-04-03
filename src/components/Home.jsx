import { Link } from "react-router";
import ProfilKort from "./ProfilKort";

export default function Home({getAllLoggData}){
    return (<>
            <h2>
                Overskrift
            </h2>
            <ProfilKort/>
            <section>
                <p>Logg</p>
            </section>
        </>)
}