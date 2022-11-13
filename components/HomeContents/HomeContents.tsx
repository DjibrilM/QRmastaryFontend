import { Button } from '@mui/material';
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import QRexample from "../../assets/images/code.svg"
import { useRecoilValue } from 'recoil'
import colorsAtom from '../../recoil/colorsState';


const HomeContents = () => {
    const QRcolor = useRecoilValue(colorsAtom);
    return (
        <div className="m-10  flex justify-center items-center flex-col">
            <h1 className="text-6xl font-PrimaryLogoFont text-center">Generate QRcode images for free  </h1>
            <p className='flex items-center mt-5 gap-2 font-Logo text-[18px] font-bold	'>Read before using <AiOutlineExclamationCircle className='text-red-400' /> </p>
            <p className='my-3 font-Logo text-gray-500 text-center'>All generated images are delete Afetr five minutes !</p>
            <div className="w-[400px] h-[400px] flex item-center justify-center" style={{ background: QRcolor.background }}>
                <QRexample style={{ color: QRcolor.color }} className=" w-[300px] h-[300px]  mt-10" />
            </div>
            <p className='my-3 font-Logo text-gray-500 text-center relative bottom-5'>A transparent background is asigned by default but you can modify it !</p>
        </div>);
}

export default HomeContents;