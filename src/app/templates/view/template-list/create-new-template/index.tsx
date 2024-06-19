import { useState } from "react";
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
import { Input } from "@/shared/view/components/ui/input";
import { Label } from "@/shared/view/components/ui/label";
import Icon from "@/shared/view/icon";
import useTemplateStore from "@/app/templates/data/template.service";

const CreateNewTemplateModal = () => {
  const [name, setName] = useState<string>();
  const createTemplate = useTemplateStore((x) => x.createTemplate);
  const onSubmit = () => {
    if (name) {
      createTemplate(name);
      setName("");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Icon name="plus" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new template</DialogTitle>
          <DialogDescription>
            Give a name to your new template. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue=""
              className="col-span-3"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
              maxLength={50}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={onSubmit}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewTemplateModal;
