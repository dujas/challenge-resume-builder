import { getSelectionColor } from "@/shared/view/layoutBlocksPDF/layoutBlocksPDF.helper";
import { CustomizeLayoutProps } from ".";

const getAvailableColorClasses = () => {
  const containerClass = "w-8 h-8 rounded-full cursor-pointer";
  return {
    blue: `${containerClass} ${getSelectionColor("blue")}`,
    red: `${containerClass} ${getSelectionColor("red")}`,
    green: `${containerClass} ${getSelectionColor("green")}`,
  };
};

const Color = ({ handleOnChangeConfig }: CustomizeLayoutProps) => {
  const containerClasses = getAvailableColorClasses();
  return (
    <div className="flex flex-col items-start gap-4">
      <div>Color</div>
      <div className="flex justify-evenly gap-4">
        <div
          className={containerClasses.blue}
          onClick={() => handleOnChangeConfig("color", "blue")}
        />
        <div
          className={containerClasses.red}
          onClick={() => handleOnChangeConfig("color", "red")}
        />
        <div
          className={containerClasses.green}
          onClick={() => handleOnChangeConfig("color", "green")}
        />
      </div>
    </div>
  );
};

export default Color;
