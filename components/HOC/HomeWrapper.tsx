import React from "react";

const HomeWrapper = ({ children }: JSX.Element[]) => {
    return <section className="flex md:flex-row-reverse flex-col-reverse justify-center ">
        {children}
    </section>;
};

export default HomeWrapper;
