import React from "react"
import { Switch, Route } from "react-router-dom"
import { DailyAttendance, Home, PersonnelList } from "../../pages"

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/personnel-list">
                <PersonnelList />
            </Route>
            <Route path="/daily-attenance">
                <DailyAttendance />
            </Route>
        </Switch>
    )
}

export default Routes
