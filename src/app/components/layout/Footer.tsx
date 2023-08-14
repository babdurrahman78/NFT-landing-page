import Button from "../common/Button"
import InputText from "../common/inputText"
import { Wrapper } from "./Wrapper"
import Image from "next/image"

const Footer = () => {
    return <Wrapper>
        <section className="bg-[#0E1135] col-span-12 grid grid-cols-12 mt-[214px] pt-[121px] pb-[31px]">
            <div className="col-span-10 col-start-2">
                <div className="flex flex-col items-center col-span-10 col-start-2 space-y-[50px]">
                    <p className="text-5xl font-semibold font-clash-display">Get More Updates</p>
                    <p className="justify-center text-center">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks</p>
                    <div className="px-[5px] py-[4px] bg-white rounded-[117px] grid grid-cols-12 min-[805px]:w-[700px] max-[804px]:w-full">
                        <input className="col-span-9 px-5 text-lg text-black bg-transparent" placeholder={'Your Email...'} />
                        <Button className="px-[55px] py-[15px] text-lg col-span-3" variant="primary">I'm in</Button>
                    </div>
                </div>

                <div className="border-t-2 solid pt-[127px] mt-[108px] grid grid-cols-10">
                    
                    <div className="col-span-4 space-y-[33px]">    
                        <div className="flex items-center space-x-2">
                            <Image src="/images/ENDFT.png" alt="ENDFT logo" width={50} height={50} />
                            <p className="text-2xl font-semibold">ENDFT</p>
                        </div>

                        <p className="leading-10">the leading NFT Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.</p>

                        <div className="flex">
                            <Button variant="link">
                                <Image src={"/images/discord.png"} alt="discord.png" width={40} height={30} />
                            </Button>
                            <Button variant="link">
                                <Image src={"/images/twitter.png"} alt="twitter.png" width={40} height={30} />
                            </Button>
                            <Button variant="link">
                                <Image src={"/images/instagram.png"} alt="instagram.png" width={40} height={30} />
                            </Button>
                            <Button variant="link">
                                <Image src={"/images/youtube.png"} alt="youtube.png" width={45} height={30} />
                            </Button>
                        </div>
                    </div>

                    <div className="col-span-2 space-y-[40px] col-start-6">
                        <p className="font-semibold text-[32px]">Marketplace</p>

                        <div className="space-y-[20px]">
                            <p>Explore</p>
                            <p>Articles</p>
                            <p>How it works</p>
                            <p>Help</p>
                        </div>
                    </div>

                    <div className="col-span-2 space-y-[40px] col-start-9">
                        <p className="font-semibold text-[32px]">Links</p>

                        <div className="space-y-[20px]">
                            <p>Token</p>
                            <p>API</p>
                            <p>Big Bounty</p>
                            <p>Become Partners</p>
                        </div>
                    </div>
                </div>

                


            </div>
        </section>
    </Wrapper>
}

export default Footer

