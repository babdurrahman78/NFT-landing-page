import Image from "next/image"

const Navbar = () => {
    return (<div className="grid items-center grid-cols-12">
        {/* Logo */}
        <div className="flex items-center col-span-2 col-start-2 space-x-2 2xl:col-start-2 xl:col-start-2 2xl:col-span-4 xl:col-span-3">
            <Image src="/ENDFT.png" alt="ENDFT logo" width={50} height={50} />
            <p className="text-2xl font-semibold">ENDFT</p>
        </div>

        {/* Menu list */}
        <ul className="flex items-center justify-between col-span-8 2xl:col-span-6 xl:col-span-7">
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

    </div>)
}

export default Navbar