import React from "react"
import { Header, Footer } from "./layouts"

function PageLayout({ children }) {
    return (
        <div className="flex flex-col" style={{height: "100vh"}}>
            <Header />
            <div className="container mx-auto mt-5 px-4 flex-1">{children}</div>
            <Footer />
        </div>
    )
}

export default PageLayout