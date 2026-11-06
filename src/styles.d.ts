import "react";

declare module "react" {
    interface CSSProperties {
        // Allows any custom CSS property key prefixed with double dashes
        [key: `--${string}`]: string | number | undefined;
    }
}
