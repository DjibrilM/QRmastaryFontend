const resultModal = () => {
    return (
        <section className="w-full h-full  fixed top-0 left-0 bottom-0 z-10 flex shadow-lg  justify-center" style={{ background: "rgb(0,0,0, 0.8)" }}>
            <div className="w-[75%] h-[600px] bg-white mt-10 p-5 ">
                <header className="w-full p-4 border-b ">
                    <h1 className="font-Logo  text-2xl">Created Image</h1>
                </header>
                <p className="text-center font-Logo my-10">The following image will be automatically deleted after 5 minutes.</p>
                <div className="w-[200px] h-[200px] m-auto">
                    <img draggable={false} src="http://localhost:8080/qrmastaryV1/main/downloadImage/2022-10-31T20:27:45.620Z" />
                </div>

                <a href="http://localhost:8080/qrmastaryV1/main/downloadImage/2022-10-31T20:27:45.620Z" download={true}>Download</a>
            </div>
        </section>
    );
}

export default resultModal;