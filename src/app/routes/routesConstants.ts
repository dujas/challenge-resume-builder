const BASE_TEMPLATES = "/templates";
const BASE_RESUMES = "/resumes";
export const APP_ROUTES = {
  home: "/",
  templates: BASE_TEMPLATES,
  templateDetails: `${BASE_TEMPLATES}/:templateId`,
  resumes: BASE_RESUMES,
  resumeDetails: `${BASE_RESUMES}/:resumeId`,
};
