import Button from '@mui/material/Button';
import { AiOutlineQrcode } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { TextField } from '@mui/material'; IoIosColorPalette
import { colors } from "../../assets/datas/colorsData"
import { useState, useTransition } from 'react';
import SpinnerImage from "../../assets/images/spinner.gif";
import {
    useRecoilState,
} from "recoil"
import colorsAtom from '../../recoil/colorsState';
import Image from 'next/image';
import { generateImage } from "../../services/index"
import resultSatate from '../../recoil/resultSate';



const QrForm = (): JSX.Element => {
    const [color, setColor] = useState<string>("#000");
    const [background, setBackground] = useState<string>("#fff")
    const [outputColor, setOutputColor] = useState<string>("");
    const [setColorPending, setColorTransition] = useTransition();
    const [backgroundMode, setBackgroundMode] = useState<boolean>(false);
    const [colorsRecoil, setColorsRecoil] = useRecoilState(colorsAtom);
    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [resultModal, setResultModal] = useRecoilState(resultSatate);
    const [error, setError] = useState<boolean>(false)

    const updateColor = (color: string) => {
        setColorTransition(() => {
            setOutputColor(color);
            if (backgroundMode === false) setColor(color);
            if (!backgroundMode === true) setBackground(color);
            if (backgroundMode === false) setColorsRecoil({ ...colorsRecoil, background: color })
            if (backgroundMode === true) setColorsRecoil({ ...colorsRecoil, color: color })
        })
    }

    const createImage = () => {
        setLoading(true)
        generateImage(colorsRecoil.color, colorsRecoil.background, text)
            .then((result: any) => {
                setError(false)
                console.log(result)
                setTimeout(() => {
                    setLoading(false)
                    setResultModal({ open: true, id: result.id })
                }, 1000);
            })
            .catch((err: any) => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
    }

    return (
        <div className="md:w-[500px] m-4 h-[880px] bg-white shadow-lg border rounded-lg bottom-10 md:relative   p-4 ">
            <h1 className='text-center text-2xl text-Logo font-medium text-gray-600 my-5'>Create Your QRcode 🙂</h1>
            <div className='my-7'>
                <TextField id="outlined-basic"
                    label="QRcode text"
                    variant="outlined"
                    className="w-full"
                    onChange={(event: any) => {
                        setColorTransition(() => {
                            setText(event.target.value)
                            error && setError(false)
                        })

                    }} defaultValue={text} />
            </div>

            <div className="w-full flex justify-between gap-4	">
                <Button variant="text" className='w-[50%] bg-primary text-white p-4 hover:bg-primary normal-case  text-[12px] font-Logo ' style={!backgroundMode ? { background: "#BD1EB9", color: "#fff" } : { background: "#ccc", color: "#333" }} onClick={() => setBackgroundMode(false)}>
                    background
                </Button>

                <Button variant="text" style={backgroundMode ? { background: "#BD1EB9", color: "white" } : { background: "#ccc" }} className='w-[50%] p-4 bg-gray-200 text-gray-500 text-white hover:gray-200 normal-case  text-[12px] font-Logo ' onClick={() => setBackgroundMode(true)}>
                    color
                </Button>
            </div>

            <div className="flex my-4 items-center gap-2">
                <IoIosColorPalette className='text-primary' />
                <p className='font-Logo'>Pick color</p>
            </div>


            <div className="w-full border h-[310px] cursor-pointer p-3 overflow-auto flex flex-wrap items-center justify-center relative">
                {colors.map(el => {
                    return <div key={Math.random()} onClick={() => updateColor(el.hex)} className='w-10 h-10 rounded-full duration-100 active:scale-[1.4] m-3 border ' style={{ background: el.hex }}></div>
                })}
            </div>

            <div className="font-Logo my-1">
                <p>color:  <span style={{ color: outputColor }}> {outputColor}</span></p>
            </div>

            <div className="flex  items-center   overflow-hidden gap-2 font-Logo my-5 ">
                <input style={{ border: `1px solid ${color}`, }} type="color" className='  bg-green-400 border-none h-10 cursor-pointer  overflow-hidden bg-transparent' value={outputColor} onChange={(event: any) => updateColor(event.target.value)} />
                <p>Custom Color</p>
            </div>

            <div className="w-full flex flex-col items-center justify-center my-3 gap-2">

                {error && <>
                    <h2 className='font-Logo text-red-400 text-Logo font-semibold'>Fails to generate your QRcode😞 </h2>
                    <p>Please try again</p>
                </>}

            </div>

            <Button variant="text" className='w-full bg-primary text-white hover:bg-primary normal-case p-3 text-[18px] font-Logo my-3 relative  disabled:cursor-not-allowed disabled:bg-gray-200 ' onClick={() => createImage()} disabled={text.trim() === '' || text.length < 1 || loading && true}>
                <AiOutlineQrcode className="text-2xl mr-2 " />
                Create QRcode
                {loading === true ? <Image alt='loading spinner' src={SpinnerImage} className="w-[20px] h-[20px] absolute left-5" /> : ''}
            </Button>
        </div >
    )
}

export default QrForm;