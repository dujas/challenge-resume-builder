import {
  TemplateConfig,
  TemplateConfigKeys,
} from "@/app/templates/domain/template-entity";
import Color from "./color";
import ComponentSize from "./component-size";
import Watermark from "./watermark";

export type CustomizeLayoutProps = {
  handleOnChangeConfig: <K extends TemplateConfigKeys>(
    prop: K,
    value: TemplateConfig[K],
  ) => void;
};
const CustomizeLayout = ({ handleOnChangeConfig }: CustomizeLayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg">Customize</h2>
      <ComponentSize
        title="Font size"
        iconName="type"
        prop="fontSize"
        handleOnChangeConfig={handleOnChangeConfig}
      />
      <Color handleOnChangeConfig={handleOnChangeConfig} />
      <ComponentSize
        title="Page margin"
        iconName="sticky-note"
        prop="pageMargin"
        handleOnChangeConfig={handleOnChangeConfig}
      />
      <ComponentSize
        title="Section margin"
        iconName="space"
        prop="sectionMargin"
        handleOnChangeConfig={handleOnChangeConfig}
      />
      <Watermark handleOnChangeConfig={handleOnChangeConfig} />
    </div>
  );
};

export default CustomizeLayout;
