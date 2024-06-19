import { useNavigate } from "react-router-dom";
import useTemplateStore from "@/app/templates/data/template.service";
import { Card } from "@/shared/view/components/ui/card";
import CreateNewTemplateModal from "./create-new-template";
import ModalActions from "@/shared/view/modal-actions-btns";

const TemplateList = (): JSX.Element => {
  const navigate = useNavigate();
  const templates = useTemplateStore((x) => x.templates);
  const deleteTemplateById = useTemplateStore((x) => x.deleteTemplateById);

  return (
    <div
      data-testid="template_list"
      className="mt-4 flex flex-wrap gap-4 justify-start justify-items-center items-center"
    >
      <CreateNewTemplateModal />
      {templates.map((x) => (
        <Card
          key={x.uuid}
          className="w-[250px] h-[250px] p-8 flex flex-col-reverse justify-between items-center cursor-pointer text-sm"
        >
          <ModalActions
            handleOnEdit={() => navigate(x.uuid)}
            handleOnDelete={() => deleteTemplateById(x.uuid)}
          />
          <div className="text-ellipsis">{x.name}</div>
        </Card>
      ))}
    </div>
  );
};

export default TemplateList;
