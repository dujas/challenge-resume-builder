import { Layout } from "@/app/templates/domain/template-entity";

const LAYOUTS: Array<Layout> = [Layout.lone, Layout.ltwo, Layout.lthree];
type LayoutSelectionProps = {
  handleOnChangeLayout: (selectedLayout: Layout) => void;
  currLayout?: Layout;
};

const LayoutSelection = ({
  currLayout,
  handleOnChangeLayout,
}: LayoutSelectionProps) => {
  return (
    <div>
      <h2 className="text-lg">Select a layout</h2>
      <div className="mt-4 flex flex-wrap flex-col justify-start items-start gap-4">
        {LAYOUTS.map((x) => (
          <div
            key={x}
            className={`p-2 cursor-pointer w-fit border rounded-lg ${x === currLayout ? "border-sky-400" : "border-slate-600"}`}
            onClick={() => handleOnChangeLayout(x)}
          >
            Layout {x + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutSelection;
