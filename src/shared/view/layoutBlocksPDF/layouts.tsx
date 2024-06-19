import {
  Page,
  PDFViewer,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { TemplateConfig } from "@/app/templates/domain/template-entity";
import { getPageMargin } from "./layoutBlocksPDF.helper";

type LayoutProps = {
  Header: React.ReactNode;
  PrimaryContent?: React.ReactNode;
  SecondaryContent?: React.ReactNode;
  templateConfig?: Partial<TemplateConfig>;
  showToolbar: boolean;
};

export const PDFLayoutOne = ({
  Header,
  PrimaryContent,
  SecondaryContent,
  templateConfig,
  showToolbar,
}: LayoutProps) => {
  const pageMargin = getPageMargin(templateConfig?.pageMargin ?? "small");
  const styles = StyleSheet.create({
    pdfViewer: {
      width: "100%",
      height: "100vh",
    },
    page: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      padding: pageMargin,
    },
    container: {
      marginTop: 16,
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    imageContainer: {
      position: "relative",
      height: "100%",
      width: "100%",
    },
    watermark: {
      opacity: 0.1,
      position: "absolute",
      top: 0,
      left: 0,
      minWidth: "100%",
      minHeight: "100%",
      height: "100%",
      width: "100%",
    },
    left: {
      flex: 1,
      flexBasis: "70%",
    },
    right: {
      flex: 1,
      flexBasis: "30%",
    },
  });
  const imgUrl = templateConfig?.watermark;
  return (
    <PDFViewer style={styles.pdfViewer} showToolbar={showToolbar}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.imageContainer}>
            {imgUrl && <Image style={styles.watermark} src={imgUrl} />}
            <View>{Header}</View>
            <View style={styles.container}>
              <View style={styles.left}>{PrimaryContent}</View>
              <View style={styles.right}>{SecondaryContent}</View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export const PDFLayoutTwo = ({
  Header,
  PrimaryContent,
  SecondaryContent,
  templateConfig,
  showToolbar,
}: LayoutProps) => {
  const imgUrl = templateConfig?.watermark;
  const pageMargin = getPageMargin(templateConfig?.pageMargin ?? "small");
  const styles = StyleSheet.create({
    pdfViewer: {
      width: "100%",
      height: "100vh",
    },
    page: {
      width: "100vw",
      height: "100vh",
    },
    container: {
      padding: pageMargin,
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    imageContainer: {
      position: "relative",
      height: "100%",
      width: "100%",
    },
    watermark: {
      opacity: 0.1,
      position: "absolute",
      top: 0,
      left: 0,
      minWidth: "100%",
      minHeight: "100%",
      height: "100%",
      width: "100%",
    },
    left: {
      flex: 1,
      flexBasis: "30%",
    },
    right: {
      flex: 1,
      flexBasis: "70%",
    },
  });
  return (
    <PDFViewer style={styles.pdfViewer} showToolbar={showToolbar}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.imageContainer}>
            {imgUrl && <Image style={styles.watermark} src={imgUrl} />}
            <View style={styles.container}>
              <View style={styles.left}>{SecondaryContent}</View>
              <View style={styles.right}>
                {Header}
                {PrimaryContent}
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export const PDFLayoutThree = ({
  Header,
  PrimaryContent,
  SecondaryContent,
  templateConfig,
  showToolbar,
}: LayoutProps) => {
  const imgUrl = templateConfig?.watermark;
  const pageMargin = getPageMargin(templateConfig?.pageMargin ?? "small");
  const styles = StyleSheet.create({
    pdfViewer: {
      width: "100%",
      height: "100vh",
    },
    page: {
      width: "100vw",
      height: "100vh",
    },
    container: {
      padding: pageMargin,
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    imageContainer: {
      position: "relative",
      height: "100%",
      width: "100%",
    },
    watermark: {
      opacity: 0.1,
      position: "absolute",
      top: 0,
      left: 0,
      minWidth: "100%",
      minHeight: "100%",
      height: "100%",
      width: "100%",
    },
    left: {
      flex: 1,
      flexBasis: "70%",
    },
    right: {
      flex: 1,
      flexBasis: "30%",
    },
  });
  return (
    <PDFViewer style={styles.pdfViewer} showToolbar={showToolbar}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.imageContainer}>
            {imgUrl && <Image style={styles.watermark} src={imgUrl} />}
            <View style={styles.container}>
              <View style={styles.left}>
                {Header}
                {PrimaryContent}
              </View>
              <View style={styles.right}>{SecondaryContent}</View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
