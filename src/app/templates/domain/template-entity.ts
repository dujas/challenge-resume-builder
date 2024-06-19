import { UUID } from "short-uuid";
import {
  Color,
  Size,
} from "@/shared/view/layoutBlocksPDF/layoutBlocksPDF.helper";

export enum Layout {
  lone,
  ltwo,
  lthree,
}

export type Template = {
  uuid: UUID;
  name: string;
  config: TemplateConfig;
};

export type TemplateConfig = {
  layout: Layout;
  fontSize: Size;
  fontFamily: string;
  color: Color;
  pageMargin: Size;
  sectionMargin: Size;
  watermark: string;
};
export type TemplateConfigKeys = Exclude<keyof TemplateConfig, "layout">;
