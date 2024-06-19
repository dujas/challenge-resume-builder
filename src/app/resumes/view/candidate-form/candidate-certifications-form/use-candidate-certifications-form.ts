import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import useResumeStore from "@/app/resumes/data/resume.service";
import useGetResumeById from "@/app/resumes/view/use-get-resume-by-id";
import { Resume, Certification } from "@/app/resumes/domain/resume-entity";
import { dateRegex } from "../field.helpers";

type CandidateCertifications = { certifications: Array<Certification> };
const useCandidateCertificationsSchema = () => {
  const schema = z.object({
    certifications: z.array(
      z.object({
        name: z.string(),
        date: z
          .string()
          .optional()
          .refine((val) => val && dateRegex.test(val), {
            message: "Invalid date format, should be YYYY-MM-DD",
          }),
      }),
    ),
  });

  return schema;
};

const defaultValues: Certification = {
  name: "",
  date: "",
};

const resolveDefaultValues = (resume?: Resume) => {
  const candidateDetails = resume?.candidateDetails;
  const values: CandidateCertifications = {
    certifications: candidateDetails?.certifications ?? [defaultValues],
  };
  return values;
};

export const useCandidateCertificationsForm = () => {
  const resume = useGetResumeById();
  const updateResumeById = useResumeStore((x) => x.updateResumeById);
  const schema = useCandidateCertificationsSchema();
  const formMethods = useForm<CandidateCertifications>({
    defaultValues: resolveDefaultValues(resume),
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { append, fields, remove } = useFieldArray({
    name: "certifications",
    control: formMethods.control,
  });

  const onSubmit = (data: CandidateCertifications) => {
    console.log(data);
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
