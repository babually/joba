import {ReactNode, SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type WithChildren<T = Record<string, unknown>> = T & {
  //  children: React.ReactNode;
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
}

export type StatusColorMap = {
    map(arg0: (status: any) => import("react").JSX.Element): unknown;
    active: string;
    inActive: string;
    paused: string;
    vacation: string;
}
