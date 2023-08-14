import Image from "next/image"
import Button from "./Button"

interface ICardProps {
    className?: string
}

const Card = ({className}: ICardProps) => {
    return <div className={`border rounded-[15px] w-[442px] h-[607px] space-y-[22.5px] p-[20px] ${className}`}>
                <Image src={'/images/card.png'} alt="card" width={401} height={328} />

                <div className="grid grid-cols-12 gap-[20px] items-center">
                    <Image className="col-span-2 rounded-[10px]" src={'/images/avatar.png'} alt="avatar" width={63} height={63}/>

                    <div className="space-y-[5px] col-span-8">
                        <p className="text-[22px] font-semibold">Emomlex Great #1</p>
                        <p className="text-[13px]">emomlex</p>
                    </div>

                    <Image className="col-span-2" src={'/images/crypto.png'} alt="crypto" width={63} height={63}/>
                </div>

                <div className="flex justify-between">
                    
                    <div>
                        <p className="text-xl font-semibold">15.8 ETH</p>
                        <p className="text-sm font-medium">latest bid</p>
                    </div>

                    <div>
                        <p className="text-xl font-semibold">15.8 ETH</p>
                        <p className="text-sm font-medium">from</p>
                    </div>

                    <div>
                        <p className="text-xl font-semibold">$345.12</p>
                        <p className="text-sm font-medium text-[#24FF00]">+12.45%</p>
                    </div>

                </div>

                <Button className="w-full">Collect Now</Button>
            </div>
}

export default Card