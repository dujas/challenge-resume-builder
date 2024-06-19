import { FormProvider } from "react-hook-form";
import { FormInput } from "@/shared/view/form/input";
import { useCandidateCertificationsForm } from "./use-candidate-certifications-form";
import { Button } from "@/shared/view/components/ui/button";
import Icon from "@/shared/view/icon";

const CandidateCertificationsForm = () => {
  const { formMethods, fields, onSubmit, defaultValues, append, remove } =
    useCandidateCertificationsForm();
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
                  name={`certifications.${index}.name` as const}
                />
                <FormInput
                  placeholder="Date"
                  name={`certifications.${index}.date` as const}
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

export default CandidateCertificationsForm;
