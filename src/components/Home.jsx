export default function Home( {loggData} ){
    
    return (
        <>
        <h2>Home</h2>
        
        {
            loggData?.map((loggRad) => (
                <article key={loggRad._id}>
                    <span>{loggRad.loggdato}</span>
                    <span>{loggRad.loggpersoner[0].personnavn}</span>
                    <span>{loggRad.loggbeskrivelse}</span>
                    <span>{loggRad.loggtimer}</span>

                </article>
            ))
        }

        </>
    );
    
}