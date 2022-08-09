import { ButtonHTMLAttributes, CSSProperties } from "react";

const containedVariantStyles = (
  bgColor: string,
  typoColor: string
): CSSProperties => ({
  padding: "6px 12px",
  color: typoColor,
  backgroundColor: bgColor,
  fontWeight: 500,
  textTransform: "uppercase",
  border: `2px solid ${bgColor}`,
});

const outlinedVariantStyles = (typoColor: string): CSSProperties => ({
  padding: "6px 12px",
  color: typoColor,
  fontWeight: 500,
  textTransform: "uppercase",
  backgroundColor: "transparent",
  border: `2px solid ${typoColor}`,
});

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  bgColor?: string;
  typoColor?: string;
}

const Button = ({
  variant = "contained",
  bgColor = "blue",
  typoColor = "white",
  children,
  ...rest
}: Props) => {
  const variantStyles =
    variant === "contained"
      ? containedVariantStyles(bgColor, typoColor)
      : outlinedVariantStyles(typoColor);

  return (
    <button style={{ ...variantStyles, ...rest?.style }} {...rest}>
      {children}
    </button>
  );
};

export default Button;
