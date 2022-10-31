import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo.png"

const Header = (): JSX.Element => {
    return (<header className="w-[95%] m-auto h-20   border-y">
        <div className="w-[90%] m-auto flex  items-center h-full">
            <div className="w-5">
                <Image src={Logo} alt="" />
            </div>
            <h1 className="ml-3 text-2xl font-Logo"> <span className="text-primary font-PrimaryLogoFont font-10xl">QR</span> mastary</h1>
        </div>
    </header>);
}

export default Header;