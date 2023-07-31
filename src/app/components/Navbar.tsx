import Image from "next/image"

const Navbar = () => {
    return (<div className="grid items-center grid-cols-12 gap-16">
        {/* Logo */}
        <div className="flex items-center space-x-2 lg:col-span-3 md:col-span-2">
            <Image src="/ENDFT.png" alt="ENDFT logo" width={50} height={50} />
            <p className="text-2xl font-semibold">ENDFT</p>
        </div>

        {/* Menu list */}
        <ul className="flex items-center lg:col-span-7 md:col-span-8 xl:space-x-32 lg:space-x-20 md:space-x-10">
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
        </ul>

        {/* Connect Wallet Button */}
        <div className="col-span-2">
            <button className="bg-[#2F80ED] font-semibold rounded-full px-5 py-3">Connect Wallet</button>

        </div>

    </div>)
}

export default Navbar