import { forwardRef, useEffect, useRef, useState, type ComponentProps } from "react";
import { Link as RRLink, NavLink, useLocation, useNavigate as useRRNavigate } from "react-router-dom";

type Params = Record<string, string>;
const build = (to: string, params?: Params) =>
  params ? to.replace(/\$(\w+)/g, (_, k) => encodeURIComponent(params[k] ?? "")) : to;

type LinkProps = Omit<ComponentProps<typeof RRLink>, "to"> & { to: string; params?: Params; activeProps?: { className?: string } };

/** React Router link that also accepts `params` and `activeProps`. */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, params, activeProps, className, ...rest }, ref) {
  const href = build(to, params);
  if (activeProps) {
    return <NavLink ref={ref} to={href} end={href === "/"} className={({ isActive }) => [className, isActive ? activeProps.className : ""].filter(Boolean).join(" ")} {...rest} />;
  }
  return <RRLink ref={ref} to={href} className={className} {...rest} />;
});

export function useNavigate() {
  const nav = useRRNavigate();
  return (opts: { to: string; params?: Params; replace?: boolean }) => nav(build(opts.to, opts.params), { replace: opts.replace });
}

export function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}

/** Minimal router state: location + a short "pending" flag after each page change. */
export function useRouterState<T>({ select }: { select: (s: { status: "idle" | "pending"; location: { pathname: string } }) => T }): T {
  const location = useLocation();
  const [pending, setPending] = useState(false);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    window.scrollTo(0, 0);
    setPending(true);
    const id = setTimeout(() => setPending(false), 450);
    return () => clearTimeout(id);
  }, [location.pathname]);
  return select({ status: pending ? "pending" : "idle", location });
}
