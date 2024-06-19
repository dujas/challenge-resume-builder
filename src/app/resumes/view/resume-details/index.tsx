import useResumeDetails from "./use-resume-details";
import CandidateResume from "@/shared/view/candidate-resume";
import CandidateForm from "../candidate-form";

const ResumeDetails = (): JSX.Element => {
  const { template, resume } = useResumeDetails();
  const commonBorderClass = "border border-slate-600 rounded-lg";
  const previewContainerClass = "px-4"; //scale-90
  const candidateFormContainerClass = "";
  const candidateDetails = resume?.candidateDetails;

  return (
    <div className="mt-4 w-full">
      <h1 className="text-4xl text-center">
        Candidate:
        <span className="italic">
          {candidateDetails?.firstName} {candidateDetails?.lastName}
        </span>
      </h1>
      <div className="text-sm text-center">
        Template name: <span className="italic">{template?.name}</span>
      </div>
      <div className={`p-4 ${commonBorderClass}`}>
        <div
          className={`pr-4 w-full h-full grid lg:grid-cols-[50%_50%] md:grid-cols-1 items-start justify-start gap-4`}
        >
          <div className={previewContainerClass}>
            <CandidateResume
              currLayout={template?.config.layout}
              templateConfig={template?.config}
              candidateDetails={candidateDetails}
              showToolbar
            />
          </div>
          <div className={candidateFormContainerClass}>
            <CandidateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetails;
