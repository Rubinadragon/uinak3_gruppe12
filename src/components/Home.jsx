import Log from "./Log";


export default function Home( {loggData} ){
    
    return (
        <>
        <h2>Home</h2>
            {loggData?.map((loggRad) => (
                <Log loggRad={loggRad} key={loggRad._id}/>
            ))}
        </>
    )
}