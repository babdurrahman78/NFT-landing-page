import Image from "next/image"
import { Wrapper } from "../layout/Wrapper"

const Brand = () => {
    return (
        <Wrapper>
            <div className="flex flex-wrap items-center justify-center gap-28 col-span-12 mt-[172px]">
                <Image src={"/images/metamask.png"} alt="metamask" width={286} height={81} />
                <Image src={"/images/trust_wallet.png"} alt="trust_wallet" width={258} height={75} />
                <Image src={"/images/wallet_connect.png"} alt="wallet_connect" width={318} height={53} />
                <Image src={"/images/exodus.png"} alt="exodus" width={285} height={58} />
                <Image src={"/images/safe_pal.png"} alt="safe_pal" width={253} height={113} />
            </div>
        </Wrapper>
    )
}

export default Brand