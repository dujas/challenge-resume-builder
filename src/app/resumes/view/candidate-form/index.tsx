import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/shared/view/components/ui/accordion";
import CandidateDetailsForm from "./candidate-details-form";
import CandidateSummaryForm from "./candidate-summary-form";
import CandidateExperiencesForm from "./candidate-experiences-form";
import CandidateEducationForm from "./candidate-education-form";
import CandidateCertificationsForm from "./candidate-certifications-form";
import CandidateSkillsForm from "./candidate-skills-form";

const CandidateForm = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-0">
        <AccordionTrigger>Candidate Details</AccordionTrigger>
        <AccordionContent>
          <CandidateDetailsForm />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger>Summary</AccordionTrigger>
        <AccordionContent>
          <CandidateSummaryForm />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Experiences</AccordionTrigger>
        <AccordionContent>
          <CandidateExperiencesForm />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Education</AccordionTrigger>
        <AccordionContent>
          <CandidateEducationForm />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Certifications</AccordionTrigger>
        <AccordionContent>
          <CandidateCertificationsForm />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Skills</AccordionTrigger>
        <AccordionContent>
          <CandidateSkillsForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CandidateForm;
