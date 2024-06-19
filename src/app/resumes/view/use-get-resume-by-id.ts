// import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useResumeStore from "@/app/resumes/data/resume.service";
import { UUID } from "short-uuid";

const useGetResumeById = () => {
  const { resumeId } = useParams();
  const getResumeById = useResumeStore((x) => x.getResumeById);
  const resume = getResumeById(resumeId as UUID);
  // const currentResume = useMemo(() => ({ ...resume }) as Resume, [resume]);
  return resume; //currentResume;
};

export default useGetResumeById;
