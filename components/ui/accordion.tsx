"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={`border-t hairline ${className ?? ""}`} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`group flex flex-1 items-center justify-between gap-6 py-4 text-left font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em] text-kicker transition-colors hover:text-foreground ${className ?? ""}`}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden className="relative h-3 w-3 shrink-0">
        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-opacity duration-300 group-data-[state=open]:opacity-0" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.35s_ease] data-[state=open]:animate-[accordion-down_0.4s_ease]"
    {...props}
  >
    <div className={`pb-6 pt-1 ${className ?? ""}`}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
