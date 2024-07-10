import { RGBColor } from "@shared/types";

export const classnames = (...arg: (string | boolean)[]) =>
  arg
    .filter((_) => (_ ? _ : false))
    .filter(Boolean)
    .join(" ");

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

export const convertToHex = (color: RGBColor) => {
  return `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(16)}`;
};

export const convertToRGB = (hex: string): RGBColor => {
  const hexValue = hex.replace("#", "");
  return {
    r: parseInt(hexValue.substring(0, 2), 16),
    g: parseInt(hexValue.substring(2, 4), 16),
    b: parseInt(hexValue.substring(4, 6), 16),
  };
};

export const getRGBString = (color: RGBColor) =>
  `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;

export const exportColor = (color: RGBColor | string) => {
  if (typeof color === "string")
    return {
      hex: color,
      rgb: getRGBString(convertToRGB(color)),
    };

  return {
    hex: convertToHex(color),
    rgb: getRGBString(color),
  };
};

export const generateGoldenRatioColors = (hexValues: string[]) => {
  const grHexValueLength = hexValues.length;
  const colors: string[] = [];

  const generate = (idx: number, loopCount: number, color: string): void => {
    if (idx >= loopCount) {
      colors.push(color);
      return;
    }

    for (let i = 0; i < grHexValueLength; i++) {
      const hex = hexValues[i];
      generate(idx + 1, loopCount, color + hex);
    }
  };

  generate(0, 3, "#");

  return colors;
};
