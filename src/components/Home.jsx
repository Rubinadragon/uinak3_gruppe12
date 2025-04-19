import ProfilKort from "./ProfilKort";
import Log from "./Log";
import "../assets/styles/Logg.scss";

export default function Home({ logs, persons }) {
  return (
    <>
      <section className="profiler">
        <h2>Gruppemedlemmer</h2>
        {persons?.map((person) => (
          <ProfilKort key={person._id} person={person} />
        ))}
      </section>
      
      <section className="arbeidslogg-box">        
        <h2>Arbeidslogg</h2>
        <section className="arbeidslogg-section">
          {logs?.map((loggRad) => (
            <Log loggRad={loggRad} key={loggRad._id} loggData={logs} />
          ))}
        </section>
      </section>
    </>
  );
}