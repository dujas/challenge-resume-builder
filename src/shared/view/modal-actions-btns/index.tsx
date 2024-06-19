import Icon from "@/shared/view/icon";

const ICON_SIZE = 16;

type ModalActionsProps = {
  handleOnDelete: () => void;
  handleOnEdit: () => void;
};
const ModalActions = ({ handleOnDelete, handleOnEdit }: ModalActionsProps) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Icon name="x" size={ICON_SIZE} onClick={handleOnDelete} />
      <Icon name="settings" size={ICON_SIZE} onClick={handleOnEdit} />
    </div>
  );
};

export default ModalActions;
