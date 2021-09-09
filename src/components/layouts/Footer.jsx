import React from 'react'

function Footer() {
    return (
        <footer className="footer relative bg-gray-800">
            <div className="container mx-auto text-white text-center py-5">
                &copy;Copyright {new Date().getYear()} | Gadjian
            </div>
        </footer>
    )
}

export default Footer
