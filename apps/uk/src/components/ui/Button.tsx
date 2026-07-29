"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "ghost" | "quiet";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
  clickLoader?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "buudy-cart-wipe border border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)] shadow-[0_14px_30px_-18px_rgba(58,31,61,.8)] hover:border-[var(--gold)]",
  ghost:
    "border border-[rgba(58,31,61,.24)] text-[var(--plum)] hover:bg-[rgba(58,31,61,.06)]",
  quiet: "text-[var(--plum)] hover:bg-[rgba(58,31,61,.06)]",
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ButtonContent({ children }: { children: ReactNode }) {
  return (
    <span className="buudy-cart-wipe-content inline-flex items-center justify-center gap-2 whitespace-nowrap [&_svg]:shrink-0">
      {children}
    </span>
  );
}

export function Button({
  children,
  className,
  clickLoader = true,
  disabled,
  variant = "primary",
  asChild,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const [isClickLoading, setIsClickLoading] = useState(false);
  const loaderTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (loaderTimeoutRef.current) {
        window.clearTimeout(loaderTimeoutRef.current);
      }
    };
  }, []);

  const classes = cn(
    "relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold transition duration-200 ease-out disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    className,
  );

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);

    if (!clickLoader || disabled || event.defaultPrevented) {
      return;
    }

    setIsClickLoading(true);
    if (loaderTimeoutRef.current) {
      window.clearTimeout(loaderTimeoutRef.current);
    }
    loaderTimeoutRef.current = window.setTimeout(() => {
      setIsClickLoading(false);
    }, 900);
  }

  if (asChild && isValidElement<HTMLAttributes<HTMLElement>>(children)) {
    return cloneElement(children, {
      ...(props as HTMLAttributes<HTMLElement>),
      className: cn(children.props.className, classes),
      children: <ButtonContent>{children.props.children}</ButtonContent>,
    });
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      type={type}
      {...props}
    >
      <ButtonContent>{children}</ButtonContent>
      {clickLoader && isClickLoading ? (
        <span aria-hidden="true" className="buudy-button-click-loader">
          <span className="buudy-button-click-loader-dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
        </span>
      ) : null}
    </button>
  );
}
