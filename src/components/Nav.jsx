import { Link } from "react-router";
import NavButton from "./NavButton";

export default function Nav({peopleData}){
    //console.log(peopleData)
    return (
    <>
        <h1><Link to="/">Test</Link></h1>
        <ul>
            {
                peopleData?.map((button) => (
                <NavButton key={button._id} 
                peopleData={button}
                />))
                /*getAllLogData?.map((button) =>
                    <li key={button._id}>
                        <NavButton button={button}/>
                    </li>
                )*/
            }
        </ul>
    </>)
}