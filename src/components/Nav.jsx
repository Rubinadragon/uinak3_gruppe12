import { Link } from "react-router-dom";

export default function Nav({peopleData}){
    //console.log(peopleData)
    return (
    <>
        <h1><Link to="/">Test</Link></h1>
        <ul>
            {
                peopleData?.map((button) => (
                    <li key={button._id}>
                        <Link to={`profile/${button.personslug}`}>{button.personnavn}</Link>
                    </li>))
            }
        </ul>
    </>)
}