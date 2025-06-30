import React from "react"

export default function Footer() {
    return(
        <div className="bg-black flex w-full">
            <div className="flex lg:flex-row md:flex-col sm:flex-col gap-x-32 justify-center align-middle p-4">
                <div className="text-white">Shop</div>
                <div className="text-white">Company</div>
                <div className="text-white"> Contact</div>
                <div className="text-white">Support</div>
            </div>
        </div>
    )
}