import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Template } from "@/app/templates/domain/template-entity";
import useResumeStore from "@/app/resumes/data/resume.service";
import useTemplateStore from "@/app/templates/data/template.service";
import { Resume } from "../../domain/resume-entity";

type OutputUseResumeDetails = {
  template: Template | undefined;
  resume: Resume | undefined;
};
const useResumeDetails = (): OutputUseResumeDetails => {
  const { resumeId } = useParams();
  const getTemplateById = useTemplateStore((x) => x.getTemplateById);
  const resumes = useResumeStore((x) => x.resumes);
  // Necessary unless we have a currentResume property in store
  const currentResume = useMemo(() => {
    return resumes.find((x) => x.uuid === resumeId);
  }, [resumes, resumeId]);
  const template = getTemplateById(currentResume?.templateId);
  return {
    template,
    resume: currentResume,
  };
};

export default useResumeDetails;
