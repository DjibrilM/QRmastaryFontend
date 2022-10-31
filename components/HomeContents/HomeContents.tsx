import { Button } from '@mui/material';
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import QRexample from "../../assets/images/code.svg"
import { useRecoilValue } from 'recoil'
import colorsAtom from '../../recoil/colorsState';



const HomeContents = () => {
    const QRcolor = useRecoilValue(colorsAtom);
    return (
        <div className="m-10  flex justify-center items-center flex-col" style={{ width: 'calc(100% - 650px)' }}>
            <h1 className="text-6xl font-PrimaryLogoFont text-center">Generate QRcode images for free  </h1>
            <p className='flex items-center mt-5 gap-2 font-Logo text-[18px] font-bold	'>Read before using <AiOutlineExclamationCircle className='text-red-400' /> </p>
            <p className='my-3 font-Logo text-gray-500'>All generated images are delete Afetr on hour !</p>
            <div className="w-[400px] h-[400px] flex item-center justify-center" style={{ background: QRcolor.background }}>
                <QRexample style={{ color: QRcolor.color }} className="w-10  w-[300px] h-[300px]  mt-10" />
            </div>

            <div className="mt-5">
                <Button className="py-3 px-[150px] bg-primary text-white hover:bg-primary" variant='text'>Download</Button>
            </div>

        </div>);
}

export default HomeContents;