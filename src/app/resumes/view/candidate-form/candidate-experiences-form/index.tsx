import { FormProvider } from "react-hook-form";
import { FormTextarea } from "@/shared/view/form/text-area";
import { FormInput } from "@/shared/view/form/input";
import { useCandidateExperiencesForm } from "./use-candidate-experiences-form";
import { Button } from "@/shared/view/components/ui/button";
import Icon from "@/shared/view/icon";

const CandidateExperiencesForm = () => {
  const { formMethods, fields, onSubmit, defaultValues, append, remove } =
    useCandidateExperiencesForm();
  return (
    <FormProvider {...formMethods}>
      <form className="p-4 w-full">
        {fields.map((field, index) => {
          return (
            <div
              key={field.id}
              className="mb-4 relative border border-slate-600 p-4 rounded w-full flex flex-col gap-4"
            >
              <div className="absolute right-[-8px] top-[-8px] flex justify-center items-center">
                <Icon
                  name="x"
                  onClick={() => remove(index)}
                  color="red"
                  size={16}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-4">
                <FormInput
                  placeholder="Title"
                  name={`experiences.${index}.title` as const}
                />
                <FormInput
                  placeholder="Company"
                  name={`experiences.${index}.company` as const}
                />
                <FormInput
                  placeholder="Location"
                  name={`experiences.${index}.location` as const}
                />
              </div>
              <FormInput
                placeholder="Start date"
                name={`experiences.${index}.startDate` as const}
              />
              <FormInput
                placeholder="End date"
                name={`experiences.${index}.endDate` as const}
              />
              <div className="mb-4">
                <FormTextarea
                  placeholder="Description"
                  name={`experiences.${index}.description`}
                />
              </div>
            </div>
          );
        })}
        <div className="py-4 flex items-center gap-4">
          <Icon
            name="plus"
            className="cursor-pointer"
            onClick={() => {
              append({
                ...defaultValues,
              });
            }}
          />
          <Button onClick={formMethods.handleSubmit(onSubmit)}>SAVE</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CandidateExperiencesForm;
