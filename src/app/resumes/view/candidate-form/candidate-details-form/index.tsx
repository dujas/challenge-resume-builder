import { FormProvider } from "react-hook-form";
import { useCandidateDetailsForm } from "./use-candidate-details-form";
import { FormInput } from "@/shared/view/form/input";
import { Button } from "@/shared/view/components/ui/button";

const CandidateDetailsForm = () => {
  const { formMethods, onSubmit } = useCandidateDetailsForm();
  const sectionContainerClass = "flex w-full flex-col items-start gap-4";
  return (
    <FormProvider {...formMethods}>
      <form className="p-4 flex w-full flex-col gap-4">
        <div className={sectionContainerClass}>
          <FormInput name="firstName" placeholder="Firstname" />
          <FormInput name="lastName" placeholder="Lastname" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <FormInput name="email" placeholder="Email" />
          <FormInput name="phoneNumber" placeholder="Phone" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <FormInput name="linkedin" placeholder="LinkedIn profile" />
          <FormInput name="address" placeholder="Address" />
        </div>
        <Button onClick={formMethods.handleSubmit(onSubmit)}>SAVE</Button>
      </form>
    </FormProvider>
  );
};

export default CandidateDetailsForm;
