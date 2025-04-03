import { Link } from "react-router";
import NavButton from "./NavButton";

export default function Nav({getAllLogData}){
    return (
    <>
        <h1><Link to="/">Test</Link></h1>
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