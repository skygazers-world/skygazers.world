import { ReactNode,useState } from "react";

export default function Collapser ({
    title,
    children
}: {
    children: ReactNode;
    title: ReactNode;
  }) {
    const [isOpen,toggleIsOpen]= useState(false);
    return (
        <div className="border-b-[1px] border-sgbodycopy pb-4">
            <div className="flex flex-row items-center justify-start cursor-pointer">
                <div className={isOpen?"transition-all ease-in-out w-[12px] h-[12px] rotate-90 mr-2":" transition-all ease-in-outw-[9px] h-[12px] rotate-0  mr-2"}>
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L-4.89399e-07 11.1962L-3.51373e-08 0.803847L9 6Z" fill="#59342B"/>
                    </svg>
                </div>
                <p className="font-gatwickbold" onClick={() => toggleIsOpen(!isOpen)}>{title}</p>
            </div>
            <div className={isOpen?"block":"hidden"}>
            {children}
            </div>
        </div>
    )
}