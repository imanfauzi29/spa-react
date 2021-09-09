import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, SearchIcon } from "@heroicons/react/solid"
import moment from "moment"
import React, { useEffect, useState } from "react"
import PersonnelService from "../service/PersonnelService"
import loadable from "@loadable/component"
import Card from "../components/Card"

const PersonnelListComponent = loadable(() =>
    import("../components/PersonnelList")
)

function PersonnelList() {
    const [personnelList, setPersonnelList] = useState([])
    const [page, setPage] = useState(1)

    const personnelService = new PersonnelService()

    useEffect(() => {
        personnelService.getUser(page).then((res) => {
            const result = res.results.map((result) => {
                // id, picture, title, telepon, birthdate, email
                const { title, first, last } = result.name

                const dataRes = {
                    id: result.id.value,
                    image: result.picture.large,
                    name: `${title}. ${first} ${last}`,
                    phone: result.phone,
                    birthday: moment(result.dob.date).format("DD-MM-YYYY"),
                    email: result.email
                }

                return dataRes
            })

            setPersonnelList(result)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const onPreviouseButtonClicked = () => setPage(page - 1)

    const onNextButtonClicked = () => setPage(page + 1)

    return (
        <div className="space-y-8">
            <Card>
                <Card.Body>
                    <div className="grid grid-cols-1 lg:grid-cols-2 space-y-2">
                        <div>
                            <h1 className="uppercase font-bold text-3xl text-indigo-600">personnel list</h1>
                            <p className="font-medium text-gray-500 text-lg">List of all personels</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                            <div className="relative lg:col-start-3">
                                <SearchIcon className="h-5 w-5 text-indigo-600 absolute ml-3 top-1/2 font-semibold" style={{transform: "translateY(-65%)"}} />
                                <input type="text" className="border-2 border-gray-300 focus:outline-none pl-10 w-full py-3 pr-3" placeholder="find personnels" style={{lineHeight: "1.3"}} />
                            </div>
                            <div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 flex items-center uppercase w-full lg:w-auto"><PlusIcon className="h-5 w-5" /> Add Personel</button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {personnelList.length > 0 &&
                    personnelList.map((item) => (
                        <div key={item.name}>
                            <PersonnelListComponent data={item} />
                        </div>
                    ))}
            </div>

            {/* next and previous  */}
            <div>
                <div className="flex flex-row space-x-20 justify-center items-center">
                    <button
                        className={`flex justify-center items-center ${page <= 1 ? "text-gray-400 cursor-default" : ""}`}
                        onClick={onPreviouseButtonClicked}
                        disabled={page <= 1 ? "disabled" : ""}>
                        <ChevronLeftIcon className={`h-full w-5 text-gray-${page <= 1 ? "400" : "700"}`} />
                        Previous
                    </button>
                    <button
                        className="flex justify-center items-center"
                        onClick={onNextButtonClicked}>
                        Next
                        <ChevronRightIcon className="h-full w-5 text-gray-700" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PersonnelList
