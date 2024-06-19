import { useCallback, useEffect, useMemo, useState } from "react";
import { UUID } from "short-uuid";
import { useParams, useNavigate } from "react-router-dom";
import useTemplateStore from "@/app/templates/data/template.service";
import { Layout, Template } from "@/app/templates/domain/template-entity";
import {
  TemplateConfigKeys,
  TemplateConfig,
} from "@/app/templates/domain/template-entity";
import { APP_ROUTES } from "@/app/routes/routesConstants";

const useTemplateDetails = () => {
  const [currentTemplate, setCurrentTemplate] = useState<Template>();
  const getTemplateById = useTemplateStore((x) => x.getTemplateById);
  const updateTemplateById = useTemplateStore((x) => x.updateTemplateById);
  const navigate = useNavigate();
  const { templateId } = useParams();

  useEffect(() => {
    const currTemplate = getTemplateById(templateId as UUID);
    if (currTemplate) {
      setCurrentTemplate(currTemplate);
    } else {
      navigate(APP_ROUTES.templates);
    }
  }, [templateId]);

  const handleOnChangeLayout = useCallback(
    (selectedLayout: Layout) => {
      const currTemplate = getTemplateById(templateId as UUID);
      if (currTemplate) {
        currTemplate.config.layout = selectedLayout;
        updateTemplateById(currTemplate.uuid, currTemplate);
        setCurrentTemplate({ ...currTemplate });
      }
    },
    [templateId],
  );
  const handleOnChangeConfig = useCallback(
    <K extends TemplateConfigKeys>(prop: K, value: TemplateConfig[K]) => {
      const currTemplate = getTemplateById(templateId as UUID);
      if (currTemplate) {
        currTemplate.config[prop] = value;
        updateTemplateById(currTemplate.uuid, currTemplate);
        setCurrentTemplate({ ...currTemplate });
      }
    },
    [templateId],
  );

  const currTemplate = useMemo(
    () => ({ ...currentTemplate }),
    [currentTemplate],
  );

  return {
    currLayout: currentTemplate?.config.layout,
    currTemplate,
    handleOnChangeConfig,
    handleOnChangeLayout,
  };
};

export default useTemplateDetails;
