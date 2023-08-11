import Image from "next/image"
import { Wrapper } from "./layout/Wrapper"

const Navbar = () => {
    return (<Wrapper>
        {/* Logo */}
        <div className="flex items-center space-x-2 min-[1000px]:col-span-4">
            <Image src="/ENDFT.png" alt="ENDFT logo" width={50} height={50} />
            <p className="text-2xl font-semibold">ENDFT</p>
        </div>

        {/* Menu list */}
        <ul className="flex items-center justify-between col-span-8">
            <li className="">
                <a className="font-semibold" href="">Market Place</a>
            </li>
            <li className=""><a className="font-semibold" href="">Collection</a></li>
            <li>
                <a className="font-semibold" href="">Community</a>
            </li>
            <li>
                <a className="font-semibold" href="">Create</a>
            </li>
            <li className="col-span-2">
                <button className="bg-[#2F80ED] font-semibold rounded-full px-5 py-3">Connect Wallet</button>
            </li>
        </ul>

    </Wrapper>)
}

export default Navbar