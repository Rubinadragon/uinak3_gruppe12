import Nav from "./Nav";

export default function Layout({children, peopleData}){
    return(
        <>
            <header>
                <Nav peopleData={peopleData}/>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}