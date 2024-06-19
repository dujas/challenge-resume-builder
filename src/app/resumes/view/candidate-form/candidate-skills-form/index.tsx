import { FormProvider } from "react-hook-form";
import { FormInput } from "@/shared/view/form/input";
import { useCandidateSkillsForm } from "./use-candidate-skills-form";
import { Button } from "@/shared/view/components/ui/button";
import Icon from "@/shared/view/icon";

const CandidateSkillsForm = () => {
  const { formMethods, fields, onSubmit, defaultValues, append, remove } =
    useCandidateSkillsForm();
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
              <div className="flex items-center gap-4">
                <FormInput
                  placeholder="Name"
                  name={`skills.${index}.name` as const}
                />
                <FormInput
                  placeholder="Score"
                  name={`skills.${index}.score` as const}
                  type="number"
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

export default CandidateSkillsForm;
