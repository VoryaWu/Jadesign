// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogosdribbbleLinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogosdribbbleLinesvgIcon(props: LogosdribbbleLinesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.989 11.572a7.96 7.96 0 00-1.573-4.351c-.288.31-.595.6-.92.87-1 .83-2.115 1.507-3.313 2.01.167.35.32.689.455 1.009v.003c.038.09.075.18.11.27 1.514-.17 3.11-.108 4.657.101.206.028.4.058.584.088zm-9.385-7.45a46.175 46.175 0 012.692 4.27c1.223-.482 2.234-1.09 3.048-1.767.283-.233.548-.485.796-.755A7.968 7.968 0 0012 4c-.468 0-.935.04-1.396.121v.001zM4.253 9.997a29.21 29.21 0 002.04-.123 31.53 31.53 0 004.862-.822 54.369 54.369 0 00-2.7-4.227 8.018 8.018 0 00-4.202 5.172zm1.53 7.038c.388-.567.898-1.205 1.575-1.899 1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995-1.836.535-3.77.869-5.697 1.042-.94.085-1.783.122-2.403.128a7.967 7.967 0 001.784 5.032h-.001zm9.222 2.38a35.945 35.945 0 00-1.632-5.709c-2.002.727-3.597 1.79-4.83 3.058a9.77 9.77 0 00-1.317 1.655A7.964 7.964 0 0012 20a7.976 7.976 0 003.005-.583v-.002zm1.873-1.075a7.998 7.998 0 002.987-4.87c-.34-.085-.771-.17-1.245-.236a12.02 12.02 0 00-3.18-.033 39.36 39.36 0 011.438 5.14v-.001zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogosdribbbleLinesvgIcon;
/* prettier-ignore-end */