import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `m-0 border-b-[6px] text-center font-medium tracking-wider max-h-fit
        transition-all duration-300 hover:-translate-y-[0.15rem]
        active:translate-y-[0.2rem] active:duration-75`,
  {
    // regular --> hover --> active --> dark --> focus
    variants: {
      variant: {
        default: `bg-gray-700 text-textWhite border-gray-900
    hover:text-white
    active:border-gray-700
    dark:bg-gray-700 dark:border-gray-900 dark:active:border-gray-700
    outline-darkOutline`,
        light: `bg-slate-50 text-slate-700 border-slate-200
    hover:text-gray-800
    active:border-slate-50
    outline-lightOutline`,
        green: `bg-lime-500 text-[#f3f2f0] border-lime-600
    hover:text-white
    active:border-lime-500`,
        blue: `bg-blue-700 text-textWhite border-blue-900
    hover:text-white
    active:border-blue-700
    dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700
    focus:ring-blue-500
    outline-blueOutline`,
        blue1: `bg-blue-400 text-[#f3f2f0] border-blue-500
    hover:text-white
    active:border-blue-400`,
        blue2: `bg-blue-500 text-[#f3f2f0] border-blue-600
    hover:text-white
    active:border-blue-500`,
        casualRed: `text-textGray bg-casualRed border-casualRedDarker
    hover:text-textGray
    active:border-casualRed
    outline-casualRedOutline`,
        casualOrange: `text-textGray bg-casualOrange border-casualOrangeDarker
    hover:text-textGray
    active:border-casualOrange
    outline-casualOrangeOutline`,
        casualGreen: `text-textGray bg-casualGreen border-casualGreenDarker
    hover:text-textGray
    active:border-casualGreen
    outline-casualGreenOutline`,
        casualAqua: `text-textGray bg-casualAqua border-casualAquaDarker
    hover:text-textGray
    active:border-casualAqua
    outline-casualAquaOutline`,
        casualSkyBlue: `text-textGray bg-casualSkyBlue border-casualSkyBlueDarker
    hover:text-textGray
    active:border-casualSkyBlue
    outline-casualSkyBlueOutline`,
        casualSlateBlue: `text-textGray bg-casualSlateBlue border-casualSlateBlueDarker
    hover:text-textGray
    active:border-casualSlateBlue
    outline-casualSlateBlueOutline`,
        casualViolet: `text-textGray bg-casualViolet border-casualVioletDarker
    hover:text-textGray
    active:border-casualViolet
    outline-casualVioletOutline`,
        casualPink: `text-textGray bg-casualPink border-casualPinkDarker
    hover:text-textGray
    active:border-casualPink
    outline-casualPinkOutline`,
      },
      size: {
        icon: `py-2 px-3 rounded-lg max-w-fit`,
        sm: `py-2 px-10 text-sm rounded-2xl`,
        md: `py-2 px-14 text-md rounded-2xl`,
        lg: `py-3 px-18 text-lg rounded-2xl`,
        oneLetter: `py-3 px-5 text-md rounded-lg uppercase max-w-fit font-semibold`,
      },
      focus: {
        true: `focus:outline-[3.5px] focus:outline focus:-translate-y-[0.2rem]`,
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface RealButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const RealButton = forwardRef<HTMLButtonElement, RealButtonProps>(
  ({ className, variant, size, focus, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className, focus }))}
        ref={ref}
        {...props}
      />
    );
  }
);

RealButton.displayName = "RealButton";
