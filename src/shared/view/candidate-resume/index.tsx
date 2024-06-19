import { getDefaultBlockStyleConfig } from "@/shared/view/layoutBlocksPDF/layoutBlocksPDF.helper";
import { Layout, TemplateConfig } from "@/app/templates/domain/template-entity";
import { CandidateDetails } from "@/app/resumes/domain/resume-entity";
import { getCandidateDetails } from "./candidate-resume.helper";
import {
  PDFLayoutOne,
  PDFLayoutTwo,
  PDFLayoutThree,
} from "../layoutBlocksPDF/layouts";
import {
  PDFHeaderBlock,
  PDFPrimaryBlock,
  PDFSecondaryBlock,
} from "../layoutBlocksPDF/layoutBlocks";

type CandidateResumeProps = {
  candidateDetails?: CandidateDetails;
  currLayout?: Layout;
  templateConfig?: TemplateConfig;
  isDummy?: boolean;
  showToolbar?: boolean;
};
const CandidateResume = ({
  currLayout,
  templateConfig,
  candidateDetails,
  isDummy,
  showToolbar = false,
}: CandidateResumeProps): JSX.Element => {
  const currTemplateConfig =
    templateConfig ?? getDefaultBlockStyleConfig(currLayout ?? Layout.lone);
  const data = getCandidateDetails({ candidateDetails, isDummy });

  return (
    <div>
      {currLayout === Layout.lone ? (
        <PDFLayoutOne
          showToolbar={showToolbar}
          templateConfig={currTemplateConfig}
          Header={
            <PDFHeaderBlock
              {...data.header}
              templateConfig={currTemplateConfig}
            />
          }
          PrimaryContent={
            <PDFPrimaryBlock
              {...data.primary}
              templateConfig={currTemplateConfig}
            />
          }
          SecondaryContent={
            <PDFSecondaryBlock
              {...data.secondary}
              templateConfig={currTemplateConfig}
            />
          }
        />
      ) : currLayout === Layout.ltwo ? (
        <PDFLayoutTwo
          showToolbar={showToolbar}
          templateConfig={currTemplateConfig}
          Header={
            <PDFHeaderBlock
              {...data.header}
              templateConfig={currTemplateConfig}
            />
          }
          PrimaryContent={
            <PDFPrimaryBlock
              {...data.primary}
              templateConfig={currTemplateConfig}
            />
          }
          SecondaryContent={
            <PDFSecondaryBlock
              {...data.secondary}
              templateConfig={currTemplateConfig}
            />
          }
        />
      ) : currLayout === Layout.lthree ? (
        <PDFLayoutThree
          showToolbar={showToolbar}
          templateConfig={currTemplateConfig}
          Header={
            <PDFHeaderBlock
              {...data.header}
              templateConfig={currTemplateConfig}
            />
          }
          PrimaryContent={
            <PDFPrimaryBlock
              {...data.primary}
              templateConfig={currTemplateConfig}
            />
          }
          SecondaryContent={
            <PDFSecondaryBlock
              {...data.secondary}
              templateConfig={currTemplateConfig}
            />
          }
        />
      ) : (
        "..."
      )}
    </div>
  );
};

export default CandidateResume;
