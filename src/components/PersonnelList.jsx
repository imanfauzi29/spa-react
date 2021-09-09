import React from "react"
import Card from "./Card"

function PersonnelList({data}) {
    console.log(data);
    return (
        <Card>
            <Card.Title title={`Personnel ID: ${data.id}`} />
            <Card.Body className="mt-5">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    <img
                        className="block mx-auto rounded-full w-48"
                        src={data.image || "https://placeholder.com/36?text=no+image"}
                        alt={data.name}
                    />
                    <div className="space-y-4">
                        {/* name  */}
                        <div>
                            <span className="font-semibold text-gray-600">
                                Name
                            </span>
                            <p className="text-gray-500">{data.name}</p>
                        </div>
                        {/* telephone */}
                        <div>
                            <span className="font-semibold text-gray-600">
                                Telephone
                            </span>
                            <p className="text-gray-500">{data.phone}</p>
                        </div>
                        {/* eirthday */}
                        <div>
                            <span className="font-semibold text-gray-600">
                                Birthday
                            </span>
                            <p className="text-gray-500">{data.birthday}</p>
                        </div>
                        {/* email */}
                        <div>
                            <span className="font-semibold text-gray-600">
                                Email
                            </span>
                            <p className="text-gray-500 break-words">{data.email}</p>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PersonnelList
