import { LegacyRef, forwardRef } from "react";
import "./Button.css";

export default forwardRef(function Button(
  props: {
    type: "submit" | "reset" | "button" | undefined;
    className: string;
    children: any;
    rest: any;
  },
  ref: LegacyRef<HTMLButtonElement> | undefined
) {
  const { type = "button", className, children, ...rest } = props;
  return (
    <button
      ref={ref}
      type={type}
      className={`${className} simple-button`}
      {...rest}
    >
      {children}
    </button>
  );
});
