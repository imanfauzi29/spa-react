import React, { Suspense } from "react"
import "./App.css"
import Routes from "./config/router"

const PageLayout = React.lazy(() => import("./components/PageLayout"))

function App() {
    return (
        <Suspense fallback={<div>LOADING</div>}>
            <PageLayout>
                <Routes />
            </PageLayout>
        </Suspense>
    )
}

export default App
