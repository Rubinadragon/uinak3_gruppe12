export default function Home( {loggData} ){
    
    return (
        <>
        <h2>Home</h2>
        
        {
            loggData?.map((loggRad) => (
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