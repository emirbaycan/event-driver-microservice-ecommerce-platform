import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShoppingBag } from "lucide-react";

export function OrderButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <ShoppingBag className="w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Purchase orders</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
