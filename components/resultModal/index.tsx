import { motion } from "framer-motion";
import { BsCloudDownload } from "react-icons/bs"
import { TfiClose } from "react-icons/tfi"
import { useRecoilState } from "recoil";
import resultSatate from "../../recoil/resultSate";




const resultModal = () => {
    const [modalState, setModalState] = useRecoilState(resultSatate)


    return modalState.open ? (
        <section className="w-full h-full  fixed top-0 left-0 bottom-0 z-10 flex shadow-lg  justify-center" style={{ background: "rgb(0,0,0, 0.8)" }}>
            <motion.div className="w-[98%] md:w-[75%] h-[600px] bg-white mt-10 p-5 " animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                <header className="w-full p-4 border-b flex items-center justify-between ">
                    <h1 className="font-Logo  md:text-2xl">Created Image</h1>
                    <TfiClose className="cursor-pointer text-2xl" onClick={() => setModalState({ ...modalState, open: false })} />
                </header>
                <p className="text-center font-Logo my-10 text-gray-400">The following image will be automatically deleted after 5 minutes.</p>
                <div className="w-[200px] h-[200px] m-auto">
                    <img draggable={false} src={"http://localhost:8080/qrmastaryV1/main/downloadImage/" + modalState.id} />
                </div>

                <div className="w-full justify-center items-center flex my-10">
                    <a href={"http://localhost:8080/qrmastaryV1/main/downloadImage/" + modalState.id} download={true} className="py-5 px-20 m-auto text-white bg-purple-700 hover:bg-purple-400 flex items-center gap-5"> <BsCloudDownload className="text-2xl" />Download</a>
                </div>

            </motion.div>
        </section>
    ) : <></>;
}

export default resultModal;