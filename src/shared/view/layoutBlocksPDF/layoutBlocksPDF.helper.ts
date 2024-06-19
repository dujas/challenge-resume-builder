import { Layout } from "@/app/templates/domain/template-entity";
import { BlockStyleConfig } from "./layoutBlocks";

export const getDefaultBlockStyleConfig = (
  currLayout: Layout,
): BlockStyleConfig["templateConfig"] => ({
  layout: currLayout,
  color: "blue",
  fontSize: "large",
});

// generic sizes
export type Size = "small" | "medium" | "large";

// margin
const pageMargin: Record<Size, number> = {
  small: 2,
  medium: 6,
  large: 12,
};

const sectionMargin: Record<Size, number> = {
  small: 2,
  medium: 6,
  large: 12,
};

export const getPageMargin = (size: Size) => pageMargin[size];
export const getSectionMargin = (size: Size) => sectionMargin[size];

// font size
const iconFontSize: Record<Size, number> = {
  small: 8,
  medium: 9,
  large: 10,
};

const fontSize: Record<Size, number> = {
  small: 8,
  medium: 10,
  large: 12,
};

const titleFontSize: Record<Size, number> = {
  small: 12,
  medium: 14,
  large: 16,
};

const candidateNameFontSize: Record<Size, number> = {
  small: 22,
  medium: 27,
  large: 32,
};

export const getIconFontSize = (size: Size) => iconFontSize[size];
export const getFontSize = (size: Size) => fontSize[size];
export const getTitleFontSize = (size: Size) => titleFontSize[size];
export const getCandidateNameFontSize = (size: Size) =>
  candidateNameFontSize[size];

// colors
export type Color = "red" | "blue" | "green";

// bg Colors
export const selectionColor: Record<Color, string> = {
  red: "bg-red-400",
  blue: "bg-sky-400",
  green: "bg-green-400",
};

export const getSelectionColor = (color: Color) => selectionColor[color];

export const bgColor: Record<Color, string> = {
  red: "#fef2f2",
  blue: "#f0f9ff",
  green: "#f0fdf4",
};

export const getBgColor = (color: Color) => bgColor[color];

// text color
export const textColor: Record<Color, string> = {
  red: "#ef4444",
  blue: "#38bdf8",
  green: "#22c55e",
};

export const getTextColor = (color: Color) => textColor[color];
