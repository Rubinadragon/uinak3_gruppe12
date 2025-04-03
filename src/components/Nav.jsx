import NavButton from "./NavButton";

export default function Nav({getAllLogData}){
    return (
    <>
        <h1>Title</h1>
        <ul>
        <NavButton/>
            {
                
                /*getAllLogData?.map((button) =>
                    <li key={button._id}>
                        <NavButton button={button}/>
                    </li>
                )*/
            }
        </ul>
    </>)
}