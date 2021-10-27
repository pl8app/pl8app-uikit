import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 136 40" {...props}>
      { isDark ? 
        (
        <>
          <image width="136" height="40" href="/images/logotextdark.png"/>
        </>) :
        (
        <>
          <image width="136" height="40" href="/images/logotext.png"/>
        </>
        )
      }
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
