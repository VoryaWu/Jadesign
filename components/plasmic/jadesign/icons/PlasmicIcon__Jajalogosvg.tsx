// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JajalogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JajalogosvgIcon(props: JajalogosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 640 640"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M372.5 165c0 26.592-30.915 52-63.5 52s-59.5-11.408-59.5-38c0-14.472 4.595-35.998 14.939-52.613C190.938 160.553 161 271.591 161 349.236c0 92.784 75.216 168 168 168s168-75.216 168-168c0-119.092-56.591-206.569-142.169-228.112C365.812 131.813 372.5 146.689 372.5 165zm-78.553 171.53c-4.021 24.526-25.836 41.366-48.727 37.613-22.89-3.752-38.187-26.676-34.167-51.202 4.021-24.525 25.836-41.365 48.727-37.612 22.89 3.752 38.187 26.676 34.167 51.201zm30.389 95.371v-.001c-1.681-8.985-3.67-19.613-3.898-28.972-.513-21.047-4.218-28.245-15.271-25.658-11.054 2.586-12.794 8.009-9.682 32.574 3.111 24.565 24.481 43.112 29.682 42.358 2.889-.42 1.269-9.079-.831-20.301zm136.461-125.255c4.478 42.012-23.946 79.486-63.487 83.7-39.54 4.214-75.224-26.426-79.702-68.438-4.478-42.012 23.946-79.486 63.486-83.7 39.541-4.215 75.225 26.426 79.703 68.438z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JajalogosvgIcon;
/* prettier-ignore-end */
