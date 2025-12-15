import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-elegant rounded-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground rounded-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-sm",
        link: "text-primary underline-offset-4 hover:underline",
        luxury:
          "bg-primary text-primary-foreground hover:opacity-90 shadow-soft hover:shadow-elegant tracking-wide uppercase text-xs rounded-sm",
        gold:
          "bg-gradient-to-r from-accent to-accent/80 text-foreground hover:opacity-90 tracking-wide uppercase text-xs font-semibold rounded-sm",
        hero:
          "bg-primary text-primary-foreground hover:opacity-90 px-8 py-4 text-base tracking-widest uppercase shadow-elegant rounded-sm",
        heroOutline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-8 py-4 text-base tracking-widest uppercase rounded-sm",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
