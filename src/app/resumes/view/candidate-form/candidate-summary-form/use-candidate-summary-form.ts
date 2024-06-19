import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useResumeStore from "@/app/resumes/data/resume.service";
import { CandidateDetails } from "@/app/resumes/domain/resume-entity";
import useGetResumeById from "@/app/resumes/view/use-get-resume-by-id";
import { Resume } from "@/app/resumes/domain/resume-entity";

type CandidateSummary = Pick<CandidateDetails, "description">;
const useCandidateSummarySchema = () => {
  const schema = z.object({
    description: z.string(),
  });

  return schema;
};

const resolveDefaultValues = (resume?: Resume) => {
  const candidateDetails = resume?.candidateDetails;
  const defaultValues: CandidateSummary = {
    description: candidateDetails?.description ?? "",
  };
  return defaultValues;
};

export const useCandidateSummaryForm = () => {
  const resume = useGetResumeById();
  const updateResumeById = useResumeStore((x) => x.updateResumeById);
  const schema = useCandidateSummarySchema();
  const formMethods = useForm<CandidateSummary>({
    defaultValues: resolveDefaultValues(resume),
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: CandidateSummary) => {
    if (resume?.uuid) {
      updateResumeById(resume.uuid, {
        ...resume,
        candidateDetails: {
          ...resume.candidateDetails,
          ...data,
        } as Resume["candidateDetails"],
      });
    }
  };

  return {
    onSubmit,
    formMethods,
  };
};
