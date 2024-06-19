import { uuid, UUID } from "short-uuid";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Resume } from "../domain/resume-entity";

type TemplateStoreType = {
  resumes: Array<Resume>;
  createResume: (templateId: UUID) => void;
  updateResumeById: (id: UUID, updatedTemplate: Resume) => void;
  getResumeById: (id?: UUID) => Resume | undefined;
  deleteResumeById: (id: UUID) => void;
  updateTemplateId: (id: UUID, templateId: UUID) => void;
};

const useResumeStore = create<TemplateStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        resumes: [],
        createResume: (templateId: UUID) => {
          const newResume = {
            uuid: uuid(),
            templateId,
          };
          set((state) => ({
            ...state,
            resumes: [...state.resumes, newResume],
          }));
        },
        getResumeById: (id?: UUID): Resume | undefined => {
          const { resumes } = get();
          return resumes.find((x) => id === x.uuid);
        },
        updateResumeById: (id: UUID, updatedResume: Resume) => {
          const { resumes } = get();
          const foundIndex = resumes.findIndex((x) => x.uuid === id);
          if (foundIndex > -1) {
            resumes[foundIndex] = { ...updatedResume };
            set((state) => ({ ...state, resumes: [...resumes] }));
          }
        },
        deleteResumeById: (id: UUID) => {
          const { resumes } = get();
          const foundIndex = resumes.findIndex((x) => x.uuid === id);
          if (foundIndex > -1) {
            resumes.splice(foundIndex, 1);
            set((state) => ({ ...state, resumes: [...resumes] }));
          }
        },
        updateTemplateId: (id: UUID, templateId: UUID) => {
          const { resumes } = get();
          const foundIndex = resumes.findIndex((x) => x.uuid === id);
          if (foundIndex > -1) {
            resumes[foundIndex].templateId = templateId;
            set((state) => ({ ...state, resumes: [...resumes] }));
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

export default useResumeStore;
