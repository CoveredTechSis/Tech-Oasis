import React from "react"

export default function Footer() {
    return(
        <div className="bg-slate-300 h-40 w-full">
            <div className="flex flex-row md:flex-col sm:flex-col gap-x-32 justify-center align-middle p-4">
                <div className="text-black">Shop</div>
                <div className="text-black">Company</div>
                <div className="text-black"> Contact</div>
                <div className="text-black">Support</div>
            </div>

        </div>
    )
}