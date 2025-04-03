import ProfilKort from "./ProfilKort";

export default function Home({setAllLoggData}){
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