import { ReactNode, SetStateAction } from "react";
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
export interface ButtonProps {
  variant: "primary" | "secondary" | "link";
  children: ReactNode;
  handleClick?: () => void;
  href?: string;
}
export type ProjectDataProps = {
  title: string;
  isLive: boolean;
  isSideProject: boolean;
  github?: string;
  liveLink?: string;
  images: {
    thumbnail: StaticImageData;
    others?: string[];
  };
  description: string;
  stack: string[];
};
export interface CardProps {
  title: string;
  description: string;
  stack: string[];
  thumbnail: StaticImageData;
}
export type NavLink = {
  path: string;
  title: string;
};
export interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  links: NavLink[];
}

export interface DialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export type Tool = {
  icon: ReactNode;
  title: string;
};
export type ToolCardProps = Tool;
