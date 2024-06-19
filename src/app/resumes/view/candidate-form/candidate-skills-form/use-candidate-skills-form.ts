import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import useResumeStore from "@/app/resumes/data/resume.service";
import useGetResumeById from "@/app/resumes/view/use-get-resume-by-id";
import { Resume, Skill } from "@/app/resumes/domain/resume-entity";

type CandidateSkills = { skills: Array<Skill> };
const useCandidateSkillsSchema = () => {
  const schema = z.object({
    skills: z.array(
      z.object({
        name: z.string(),
        score: z.number(),
      }),
    ),
  });

  return schema;
};

const defaultValues: Skill = {
  name: "",
  score: 0,
};

const resolveDefaultValues = (resume?: Resume) => {
  const candidateDetails = resume?.candidateDetails;
  const values: CandidateSkills = {
    skills: candidateDetails?.skills ?? [defaultValues],
  };
  return values;
};

export const useCandidateSkillsForm = () => {
  const resume = useGetResumeById();
  const updateResumeById = useResumeStore((x) => x.updateResumeById);
  const schema = useCandidateSkillsSchema();
  const formMethods = useForm<CandidateSkills>({
    defaultValues: resolveDefaultValues(resume),
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { append, fields, remove } = useFieldArray({
    name: "skills",
    control: formMethods.control,
  });

  const onSubmit = (data: CandidateSkills) => {
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
    append,
    fields,
    remove,
    defaultValues,
  };
};
