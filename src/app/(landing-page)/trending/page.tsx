import Button from "@/app/components/common/Button";
import Card from "@/app/components/common/Card";
import { Wrapper } from "@/app/components/layout/Wrapper";

const Page = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center col-span-12 mt-14 space-y-[65px]">
        <p className="text-center text-[55px] gradient font-semibold font-clash-display">
          Trending NFTs
        </p>

        <div className="flex gap-x-[31px] z-50 relative w-full overflow-x-scroll no-scrollbar">
          <Card className="flex-none" />
          <Card className="flex-none" />
          <Card className="flex-none" />
          <Card className="flex-none" />
          <Card className="flex-none" />
        </div>

        <Button variant="light">See More</Button>
      </div>
    </Wrapper>
  );
};

export default Page;
