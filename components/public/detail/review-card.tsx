import StarRating from "@/components/public/detail/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/lib/utils";
import {
  MessageSquareTextIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  UserPlus2Icon,
} from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 group">
      <HoverCard>
        <HoverCardTrigger className="h-fit">
          <Avatar className="size-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>

        <HoverCardContent className="w-xs flex flex-col gap-4">
          <section className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-1 flex-1">
              <h4 className="text-sm font-semibold">@Username</h4>
              <div className="text-muted-foreground text-xs">
                Joined December 2021
              </div>
            </div>
          </section>

          <section className="flex-center gap-2 *:flex-1">
            <Button variant="outline">
              <MessageSquareTextIcon />
              <span>Message</span>
            </Button>
            <Button>
              <UserPlus2Icon />
              <span>Add friend</span>
            </Button>
          </section>
        </HoverCardContent>
      </HoverCard>

      <div className="flex-1 p-4 rounded-2xl border-2 border-muted group-hover:border-muted-foreground duration-300">
        <header className="flex-center gap-4 justify-between">
          <p className="font-semibold hover:underline underline-offset-4">
            @Username
          </p>
          <div className="flex-center gap-2">
            <StarRating rating={5} showScore size="sm" />
          </div>
        </header>

        <p className="mt-1 mb-2 text-muted-foreground text-xs">
          {formatDate(new Date())}
        </p>

        <p className="text-base line-clamp-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          quibusdam cum esse nihil cumque eligendi quo? Eaque iure sapiente
          obcaecati doloribus amet? Nostrum, sunt placeat in optio deleniti
          quaerat neque, officia, laudantium eveniet ad voluptatem alias
          possimus dolore voluptas recusandae.
        </p>

        <div className="flex-center gap-8 mt-2">
          <div className="flex-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ThumbsUpIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Helpful</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span>23</span>
          </div>

          <div className="flex-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ThumbsDownIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Not helpful</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
