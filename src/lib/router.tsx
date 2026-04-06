import { useState, useEffect } from "react";
import type { AnchorHTMLAttributes, ReactNode, MouseEvent } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export const Link = ({ to, href, className, children, onClick, ...rest }: LinkProps) => (
  <a href={to ?? href} className={className} onClick={onClick} {...rest}>
    {children}
  </a>
);

export const useLocation = () => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return { pathname };
};
