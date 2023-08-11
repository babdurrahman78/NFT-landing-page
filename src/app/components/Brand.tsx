import Image from "next/image"
import { Wrapper } from "./layout/Wrapper"

const Brand = () => {
    return (
        <Wrapper>
            <Image className="col-span-2 col-start-3" src={"/metamask.png"} alt="metamask" width={400} height={81} />
            <Image className="col-span-2" src={"/horizontal_blue.png"} alt="metamask" width={400} height={81} />
            <Image className="col-span-2" src={"/metamask.png"} alt="metamask" width={400} height={81} />

        </Wrapper>
    )
}

export default Brand