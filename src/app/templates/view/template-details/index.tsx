import LayoutSelection from "../layout-selection";
import CustomizeLayout from "../customize-layout";
import CandidateResume from "@/shared/view/candidate-resume";
import useTemplateDetails from "./use-template-details";

const TemplateDetails = () => {
  const {
    currLayout,
    currTemplate,
    handleOnChangeLayout,
    handleOnChangeConfig,
  } = useTemplateDetails();
  const commonBorderClass = "border border-slate-600 rounded-lg";
  const templatePreviewContainerClass = "px-4";
  return (
    <div className="mt-4 w-full">
      <h1 className="p-4 text-4xl text-center">
        Template name: <span className="italic">{currTemplate?.name}</span>
      </h1>
      <div className={`p-4 ${commonBorderClass}`}>
        <div
          className={`pr-4 w-full h-full grid lg:grid-cols-[20%_80%] md:grid-cols-1 items-start justify-start gap-4`}
        >
          <div className={`flex flex-col gap-4`}>
            <div className={`p-4 ${commonBorderClass}`}>
              <LayoutSelection
                handleOnChangeLayout={handleOnChangeLayout}
                currLayout={currTemplate?.config?.layout ?? currLayout}
              />
            </div>
            <div className={`p-4 ${commonBorderClass}`}>
              <CustomizeLayout handleOnChangeConfig={handleOnChangeConfig} />
            </div>
          </div>
          <div className={templatePreviewContainerClass}>
            <CandidateResume
              isDummy={true}
              currLayout={currLayout}
              templateConfig={currTemplate?.config}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
