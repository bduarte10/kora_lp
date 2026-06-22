"use client";

import type { GTMEvent } from "@/lib/gtm";
import { pushEvent } from "@/lib/gtm";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  event: GTMEvent;
  children: ReactNode;
};

export function TrackedLink({ event, href, onClick, children, ...props }: TrackedLinkProps) {
  const handleClick = (clickEvent: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(clickEvent);
    if (!clickEvent.defaultPrevented) pushEvent(event);
  };

  return (
    <a href={href} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
