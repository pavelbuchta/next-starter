import { BadgeArrow } from "./icons";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[32px] w-fit cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#02FCEF70] via-[#FFB52B70] to-[#A02BFE70] p-[1px]">
      <div className="flex items-center gap-[3.3px] rounded-full bg-[#0B0E14] px-[12px] py-[7px] text-sm font-normal leading-[14px] text-foreground opacity-[94]">
        {children}
        <BadgeArrow />
      </div>
    </div>
  );
}
