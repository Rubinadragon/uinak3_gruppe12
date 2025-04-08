import Nav from "./Nav";
import "../assets/styles/layout.scss"

export default function Layout({children, persons}){
    return(
        <>
            <header>
                <Nav persons={persons}/>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}