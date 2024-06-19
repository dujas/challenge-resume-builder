import { Button } from "@/shared/view/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/shared/view/components/ui/dialog";
import { Card } from "@/shared/view/components/ui/card";
import Icon from "@/shared/view/icon";
import { useGetTemplates } from "@/app/resumes/data/templates.service";
import { UUID } from "short-uuid";
import { ScrollArea } from "@/shared/view/components/ui/scroll-area";

type CreateNewTemplateModalProps = {
  handleOnChange: (layoutUuid: UUID) => void;
};

const CreateNewResumeModal = ({
  handleOnChange,
}: CreateNewTemplateModalProps) => {
  const { templates } = useGetTemplates();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Icon name="plus" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4 w-full">
        <DialogHeader>
          <DialogTitle>Create a new resume</DialogTitle>
          <DialogDescription>Select an existing template</DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <ScrollArea className="py-4 h-72">
            <div className="flex flex-wrap justify-center gap-4">
              {templates.map((x) => (
                <Card
                  key={x.uuid}
                  onClick={() => handleOnChange(x.uuid)}
                  className="w-[150px] h-[150px] p-8 flex flex-col-reverse justify-between items-center cursor-pointer text-sm"
                >
                  <div className="text-ellipsis">{x.name}</div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </DialogClose>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewResumeModal;
