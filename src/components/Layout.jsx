import Nav from "./Nav";
import "../assets/styles/layout.scss"

export default function Layout({children, persons}){
    return(
        <>
            <Nav persons={persons}/>
            <main>
                {children}
            </main>
        </>
    )
}