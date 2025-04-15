import Nav from "./Nav";

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