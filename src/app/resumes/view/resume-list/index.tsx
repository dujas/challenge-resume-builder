import useResumeStore from "@/app/resumes/data/resume.service";
import { Card } from "@/shared/view/components/ui/card";
import CreateNewResumeModal from "./create-new-resume";
import { UUID } from "short-uuid";
import { useNavigate } from "react-router-dom";
import ModalActions from "@/shared/view/modal-actions-btns";
import { useGetTemplates } from "../../data/templates.service";

const TemplateList = (): JSX.Element => {
  const { getTemplateById } = useGetTemplates();
  const navigate = useNavigate();
  const resumes = useResumeStore((x) => x.resumes);
  const createResume = useResumeStore((x) => x.createResume);
  const deleteResumeById = useResumeStore((x) => x.deleteResumeById);

  return (
    <div className="mt-4 flex flex-wrap gap-4 justify-start justify-items-center items-center">
      <CreateNewResumeModal
        handleOnChange={(layoutUuid: UUID) => createResume(layoutUuid)}
      />
      {resumes.map((x) => (
        <Card
          key={x.uuid}
          className="w-[250px] h-[250px] p-8 flex flex-col justify-between items-center cursor-pointer text-sm"
        >
          <div className="text-ellipsis">
            {x.candidateDetails?.firstName ?? "PENDING"}
          </div>
          <div className="text-xs italic">
            ({getTemplateById(x.templateId)?.name ?? "..."})
          </div>
          <ModalActions
            handleOnDelete={() => deleteResumeById(x.uuid)}
            handleOnEdit={() => navigate(x.uuid)}
          />
        </Card>
      ))}
    </div>
  );
};

export default TemplateList;
