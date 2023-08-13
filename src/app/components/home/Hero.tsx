import { Wrapper } from "../layout/Wrapper"

const Hero = () => {
    return (<Wrapper>
        {/* Text */}
        <div className="col-span-5  pt-[59px]">
            <p className="font-clash-display tracking-[2.175px] font-medium text-[87px] leading-[78.5px]">
                Discover Collect, & Sell <span className="font-semibold gradient">Extraordinary</span> NFTs
            </p>

            <p className="text-xl capitalize mt-[53px]">
                the leading NFT Marketplace on Ethereum<br /> Home to the next generation of digital creators.<br /> Discover the best NFT collections.
            </p>

            <div className="flex mt-[67px] space-x-[26px]">
                <button className="bg-[#2F80ED] font-semibold rounded-[60px] py-[15px] px-[55px] col-span-1 text-[24px]">Explore</button>
                <button className="border-white border font-semibold rounded-[60px] py-[15px] px-[55px] col-span-1 text-[24px]">Create</button>
            </div>

            <div className="flex mt-[67px] space-x-[43px]">
                <div className="flex flex-col items-center space-y-[10px]">
                    <p className="text-4xl font-semibold font-clash-display">
                        432K+
                    </p>
                    <p className="text-base">Collections</p>
                </div>

                <div className="flex flex-col items-center space-y-[10px]">
                    <p className="text-4xl font-semibold font-clash-display">
                        200K+
                    </p>
                    <p className="text-base">Artist</p>
                </div>

                <div className="flex flex-col items-center space-y-[10px]">
                    <p className="text-4xl font-semibold font-clash-display">
                        10K+
                    </p>
                    <p className="text-base">Community</p>
                </div>
            </div>
        </div>

        {/* MONYET */}


    </Wrapper>)
}

export default Hero