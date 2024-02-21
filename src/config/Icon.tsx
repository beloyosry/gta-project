import React, { ReactElement, SVGProps } from "react";

interface IconProps {
    svg: ReactElement<SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
    fill?: string;
    bg?: string;
}


const Icon = ({ svg, width = 30, height = 30, fill = "white", bg = "black" }: IconProps) => (
    <div style={{
        backgroundColor: bg,
        width: width + 7,
        height: height + 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
    }}>
        {React.cloneElement(svg, { width, height, fill })}
    </div>
);

export default Icon;