import { StyleSheet, Text, View } from "@react-pdf/renderer";
import {
  CandidateDetails,
  Experience,
  Education,
  Certification,
  Skill,
} from "@/app/resumes/domain/resume-entity";
import { Layout, TemplateConfig } from "@/app/templates/domain/template-entity";
import {
  Color,
  getBgColor,
  getTextColor,
  getIconFontSize,
  getFontSize,
  getTitleFontSize,
  getSectionMargin,
  getCandidateNameFontSize,
} from "./layoutBlocksPDF.helper";

export type BlockStyleConfig = {
  templateConfig?: Partial<TemplateConfig>;
};

export type HeaderProps = Pick<
  CandidateDetails,
  "firstName" | "lastName" | "phoneNumber" | "email" | "address" | "linkedin"
> &
  BlockStyleConfig;

export const PDFHeaderBlock = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  address,
  linkedin,
  templateConfig,
}: HeaderProps) => {
  const alignItems =
    templateConfig?.layout === Layout.lone ? "center" : "flex-start";
  const sectionMargin = getSectionMargin(
    templateConfig?.sectionMargin ?? "small",
  );
  const styles = StyleSheet.create({
    container: {
      alignItems: alignItems,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: sectionMargin,
    },
    title: {
      color: getTextColor(templateConfig?.color ?? "blue"),
      fontSize: getCandidateNameFontSize(templateConfig?.fontSize ?? "large"),
      lineHeight: 1,
    },
    section: {
      display: "flex",
      flexDirection: "row",
      gap: 0,
    },
    item: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 3,
      padding: 3,
      fontSize: getIconFontSize(templateConfig?.fontSize ?? "small"),
    },
  });
  return (
    <View data-testid="header_block" style={styles.container}>
      <Text style={styles.title}>
        {firstName} {lastName}
      </Text>
      <View style={styles.section}>
        <Text style={styles.item}>
          {/* <Icon name="phone" style={IconStyle} /> */}
          {phoneNumber}
        </Text>
        <Text style={styles.item}>
          {/* <Icon name="mail" style={IconStyle} /> */}
          {email}
        </Text>
        <Text style={styles.item}>
          {/* <Icon name="map-pin" style={IconStyle} /> */}
          {address}
        </Text>
        <Text style={styles.item}>
          {/* <Icon name="linkedin" style={IconStyle} /> */}
          {linkedin}
        </Text>
      </View>
    </View>
  );
};

export type ExperienceProps = Experience & BlockStyleConfig;
export const ExperienceBlock = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  templateConfig,
}: ExperienceProps) => {
  const fontSize = getFontSize(templateConfig?.fontSize ?? "medium");
  const textColor = getTextColor(templateConfig?.color as Color);
  const sectionMargin = getSectionMargin(
    templateConfig?.sectionMargin ?? "small",
  );
  const styles = StyleSheet.create({
    container: {
      padding: sectionMargin,
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    section: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize,
      fontWeight: "bold",
    },
    item: {
      fontSize,
    },
    company: {
      fontSize,
      color: textColor,
    },
    description: {
      fontSize,
      fontStyle: "italic",
      marginBottom: 12,
      textAlign: "justify",
      fontWeight: "light",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.item}>
          {startDate} - {endDate}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.item}>{location}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export type EducationProps = Education & BlockStyleConfig;
export const EducationBlock = ({
  degree,
  major,
  school,
  university,
  location,
  startDate,
  endDate,
  description,
  templateConfig,
}: EducationProps) => {
  const fontSize = getFontSize(templateConfig?.fontSize ?? "medium");
  const textColor = getTextColor(templateConfig?.color as Color);
  const sectionMargin = getSectionMargin(
    templateConfig?.sectionMargin ?? "small",
  );

  const styles = StyleSheet.create({
    container: {
      padding: sectionMargin,
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    section: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize,
      fontWeight: "bold",
    },
    item: {
      fontSize,
    },
    university: {
      fontSize,
      color: textColor,
    },
    description: {
      fontSize,
      fontStyle: "italic",
      marginBottom: 12,
      textAlign: "justify",
      fontWeight: "light",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>
          {degree} {major}
        </Text>
        <Text style={styles.item}>
          {startDate} - {endDate}
        </Text>
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.university}>{school ?? university}</Text>
        </View>
        <Text style={styles.item}>{location}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export type PrimaryBlockProps = Pick<
  CandidateDetails,
  "description" | "experiences" | "education"
> &
  BlockStyleConfig;

export const PDFPrimaryBlock = ({
  experiences,
  education,
  description,
  templateConfig,
}: PrimaryBlockProps) => {
  const fontSize = getFontSize(templateConfig?.fontSize ?? "medium");
  const sectionMargin = getSectionMargin(
    templateConfig?.sectionMargin ?? "small",
  );
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: sectionMargin,
    },
    section: {
      marginTop: 6,
      marginBottom: 6,
    },
    description: {
      fontSize,
      fontStyle: "italic",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <BlockTitle title="Summary" templateConfig={templateConfig} />
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>
        <BlockTitle title="Experiences" templateConfig={templateConfig} />
        {experiences.map((x) => (
          <ExperienceBlock
            key={x.title}
            {...x}
            templateConfig={templateConfig}
          />
        ))}
      </View>

      <View>
        <BlockTitle title="Education" templateConfig={templateConfig} />
        {education.map((x) => (
          <EducationBlock
            key={x.degree}
            {...x}
            templateConfig={templateConfig}
          />
        ))}
      </View>
    </View>
  );
};

export type CertificationBlockProps = Certification & BlockStyleConfig;
export const CertificationBlock = ({
  name,
  date,
  templateConfig,
}: CertificationBlockProps) => {
  const fontSize = getFontSize(templateConfig?.fontSize ?? "medium");
  const styles = StyleSheet.create({
    container: {
      fontSize,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      textAlign: "justify",
      gap: 16,
      marginBottom: 12,
    },
    item: {
      fontSize,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{name}</Text>
      <Text style={styles.item}>{date}</Text>
    </View>
  );
};

export type SkillsBlockProps = Skill & BlockStyleConfig;
export const SkillsBlock = ({
  name,
  score,
  templateConfig,
}: SkillsBlockProps) => {
  const fontSize = getFontSize(templateConfig?.fontSize ?? "medium");
  const styles = StyleSheet.create({
    container: {
      fontSize,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      textAlign: "justify",
      gap: 16,
    },
    item: {
      fontSize,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{name}</Text>
      <Text style={styles.item}>{score} / 10</Text>
    </View>
  );
};

export type SecondaryBlockProps = Pick<
  CandidateDetails,
  "certifications" | "skills"
> &
  BlockStyleConfig;

export const PDFSecondaryBlock = ({
  certifications,
  skills,
  templateConfig,
}: SecondaryBlockProps) => {
  const bgColor = getBgColor(templateConfig?.color as Color);
  const sectionMargin = getSectionMargin(
    templateConfig?.sectionMargin ?? "small",
  );
  const styles = StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      height: "100%",
      padding: 6,
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    section: {
      padding: sectionMargin,
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <BlockTitle title="Certifications" templateConfig={templateConfig} />
        {certifications.map((x) => (
          <CertificationBlock
            key={x.name}
            {...x}
            templateConfig={templateConfig}
          />
        ))}
      </View>

      <View style={styles.section}>
        <BlockTitle title="Skills" templateConfig={templateConfig} />
        {skills.map((x) => (
          <SkillsBlock key={x.name} {...x} templateConfig={templateConfig} />
        ))}
      </View>
    </View>
  );
};

export type BlockTitleProps = {
  title: string;
} & BlockStyleConfig;
export const BlockTitle = ({ title, templateConfig }: BlockTitleProps) => {
  const textColor = getTextColor(templateConfig?.color as Color);
  const titleFontSize = getTitleFontSize(templateConfig?.fontSize ?? "small");
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
    },
    title: {
      color: textColor,
      fontSize: titleFontSize,
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: textColor,
      marginVertical: 8,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
    </View>
  );
};
