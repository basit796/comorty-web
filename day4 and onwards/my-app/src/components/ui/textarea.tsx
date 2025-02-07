import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return <textarea ref={ref} className={`border p-2 rounded-md ${className}`} {...props} />;
});

Textarea.displayName = "Textarea";
export { Textarea };
