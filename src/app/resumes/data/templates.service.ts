import useTemplateStore from "@/app/templates/data/template.service";

export const useGetTemplates = () => {
  const templates = useTemplateStore((x) => x.templates);
  const getTemplateById = useTemplateStore((x) => x.getTemplateById);
  return {
    templates,
    getTemplateById,
  };
};
