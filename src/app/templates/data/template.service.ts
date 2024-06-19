import { uuid, UUID } from "short-uuid";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Layout, Template, TemplateConfig } from "../domain/template-entity";

type TemplateStoreType = {
  templates: Array<Template>;
  createTemplate: (name: string) => void;
  updateTemplateById: (id: UUID, updatedTemplate: Template) => void;
  getTemplateById: (id?: UUID) => Template | undefined;
  deleteTemplateById: (id: UUID) => void;
};

const defaultTemplateConfig: TemplateConfig = {
  fontSize: "medium",
  fontFamily: "lato",
  color: "blue",
  pageMargin: "medium",
  sectionMargin: "medium",
  layout: Layout.lone,
  watermark: "",
};

const useTemplateStore = create<TemplateStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        templates: [],
        createTemplate: (name: string) => {
          const newTemplate = {
            uuid: uuid(),
            name,
            config: defaultTemplateConfig,
          };
          set((state) => ({
            ...state,
            templates: [...state.templates, newTemplate],
          }));
        },
        updateTemplateById: (id: UUID, updatedTemplate: Template) => {
          const { templates } = get();
          const foundIndex = templates.findIndex((x) => x.uuid === id);
          if (foundIndex > -1) {
            templates[foundIndex] = { ...updatedTemplate };
            set((state) => ({ ...state, templates: [...templates] }));
          }
        },
        getTemplateById: (id?: UUID): Template | undefined => {
          const { templates } = get();
          return templates.find((x) => id === x.uuid);
        },
        deleteTemplateById: (id: UUID) => {
          const { templates } = get();
          const foundIndex = templates.findIndex((x) => x.uuid === id);
          if (foundIndex > -1) {
            templates.splice(foundIndex, 1);
            set((state) => ({ ...state, templates: [...templates] }));
          }
        },
      }),
      {
        name: "resume-builder",
        version: 1,
      },
    ),
  ),
);

export default useTemplateStore;
