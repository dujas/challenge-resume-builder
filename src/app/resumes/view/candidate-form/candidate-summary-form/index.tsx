import { FormProvider } from "react-hook-form";
import { FormTextarea } from "@/shared/view/form/text-area";
import { useCandidateSummaryForm } from "./use-candidate-summary-form";
import { Button } from "@/shared/view/components/ui/button";

const CandidateSummaryForm = () => {
  const { formMethods, onSubmit } = useCandidateSummaryForm();
  const sectionContainerClass =
    "flex w-full lg:flex-row md:flex-col items-center gap-4";
  return (
    <FormProvider {...formMethods}>
      <form className="p-4 flex items-center w-full gap-4">
        <div className={sectionContainerClass}>
          <FormTextarea name="description" placeholder="Summary" />
        </div>
        <Button onClick={formMethods.handleSubmit(onSubmit)}>SAVE</Button>
      </form>
    </FormProvider>
  );
};

export default CandidateSummaryForm;
