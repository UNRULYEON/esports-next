import { ListFilterIcon } from "lucide-react";
import { Button, Typography } from "@/components";

export const Header = () => {
  return (
    <div className="flex items-center">
      <Typography.H1>Schedule</Typography.H1>
      <Button variant="ghost" size="icon">
        <ListFilterIcon />
      </Button>
    </div>
  );
};
