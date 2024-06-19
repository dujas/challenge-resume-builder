import { memo } from "react";
import { Button } from "@/shared/view/components/ui/button";
import { TemplateConfigKeys } from "@/app/templates/domain/template-entity";
import { CustomizeLayoutProps } from ".";
import Icon, { IconNameType } from "@/shared/view/icon";

const ComponentSize = ({
  handleOnChangeConfig,
  prop,
  iconName,
  title,
}: CustomizeLayoutProps & {
  title: string;
  iconName: IconNameType;
  prop: TemplateConfigKeys;
}) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div>{title}</div>
      <div className="flex justify-evenly gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleOnChangeConfig(prop, "small")}
        >
          <Icon name={iconName} size={12} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleOnChangeConfig(prop, "medium")}
        >
          <Icon name={iconName} size={18} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleOnChangeConfig(prop, "large")}
        >
          <Icon name={iconName} size={24} />
        </Button>
      </div>
    </div>
  );
};
const MemoedComponentSize = memo(ComponentSize);
MemoedComponentSize.displayName = "ComponentSize";
export default MemoedComponentSize;
