import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { cn } from "~/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false);

    const isPassword = type === "password";
    const isSearch = type === "search";
    const inputType = isPassword ? (visible ? "text" : "password") : type;
    return (
      <div className="relative w-full">
        {isSearch && (
          <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        )}
        <input
          ref={ref}
          type={inputType}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border flex w-full min-w-0 rounded-2xl bg-white px-3 py-2.5 text-lg transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            isSearch && "pl-10",
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer hover:opacity-80"
            onClick={() => setVisible(!visible)}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
