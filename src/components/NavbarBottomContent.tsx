import { BarChart, Home } from "lucide-react";
import Link from "next/link";

export const NavbarBottomContent = () => {
  return (
    <>
      <Link href="/">
        {/* <AnimationWrapper variants={animations.smallScale} key="nb-home-icon"> */}
        <Home className="cursor-pointer h-14 w-14 fill-slate-700 hover:fill-slate-800" />
        {/* </AnimationWrapper> */}
      </Link>
      <Link href="/stats">
        {/* <AnimationWrapper variants={animations.smallScale} key="nb-chart-icon"> */}
        <BarChart className="cursor-pointer h-14 w-14 fill-slate-700 hover:fill-slate-800" />
        {/* </AnimationWrapper> */}
      </Link>
    </>
  );
};
