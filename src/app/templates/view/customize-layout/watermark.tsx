import { CustomizeLayoutProps } from ".";
import { Input } from "@/shared/view/components/ui/input";

const Watermark = ({ handleOnChangeConfig }: CustomizeLayoutProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files ?? [];
    const file = files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imageContainer = document.getElementById("imageContainer");
        if (imageContainer) {
          imageContainer.textContent = "";
          const img = document.createElement("img");
          const imageURL = e.target?.result as string;
          img.src = imageURL;
          handleOnChangeConfig("watermark", imageURL);
          img.style.maxWidth = "100%";
          img.style.height = "200px";
          imageContainer.appendChild(img);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div>Watermark</div>
      <Input type="file" name="file" onChange={handleOnChange} />
      <div id="imageContainer" />
    </div>
  );
};

export default Watermark;
