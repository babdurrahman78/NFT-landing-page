import Image from "next/image"
import { Wrapper } from "./Wrapper"
import Button from "../common/Button"

const Navbar = () => {
    return (<Wrapper>
        {/* Logo */}
        <div className="flex items-center space-x-2 min-[1000px]:col-span-4 min-[700px]:col-span-3">
            <Image src="/images/ENDFT.png" alt="ENDFT logo" width={50} height={50} />
            <p className="text-2xl font-semibold">ENDFT</p>
        </div>

        {/* Menu list */}
        <ul className="flex items-center justify-between min-[1000px]:col-span-8 min-[700px]:col-span-9">
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
                <Button variant="primary">Connect Wallet</Button>
            </li>
        </ul>

    </Wrapper>)
}

export default Navbar