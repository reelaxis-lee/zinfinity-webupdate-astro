import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const Link = ({ to, href, className, children, onClick, ...rest }) => /* @__PURE__ */ jsx("a", { href: to ?? href, className, onClick, ...rest, children });
const useLocation = () => {
  const [pathname, setPathname] = useState("/");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return { pathname };
};

export { Link as L, useLocation as u };
