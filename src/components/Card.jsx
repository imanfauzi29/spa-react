import React from "react"

const Title = ({ title }) => (
    <>
        <div className="flex justify-between">
            <h1 className="text-gray-500 text-lg font-normal">{title}</h1>
        </div>
        <hr className="w-full border-t-2" />
    </>
)

const Body = ({className, children}) => (
    <>
        <div className={`${className ?? ""}`}>
            {children}
        </div>
    </>
)

const Card = ({ className, children }) => (
    <div className={`w-full border border-gray-300 rounded-md p-5 ${className ?? ""}`}>
        {children}
    </div>
)

Card.Title = Title
Card.Body = Body

export default Card
export { Title, Body }
