"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCheckIcon } from "lucide-react";
import { useState } from "react";

export default function NotificationItem() {
  const [status, setStatus] = useState(false);

  return (
    <li
      className={`outline-1 outline-transparent hover:outline-muted-foreground duration-300 rounded-md p-4 space-y-2 ${
        !status && "bg-muted/50"
      }`}
    >
      <section className="flex gap-4">
        <div className="h-20 w-16 bg-muted rounded-md" />
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex-center gap-2 h-6">
            <span className="font-bold">Notification label</span>
            {!status && (
              <span className="font-normal">
                <Badge>Unread</Badge>
              </span>
            )}
          </div>

          <p className="text-muted-foreground line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae
            corrupti magni incidunt ad doloremque tempore minima cumque fuga.
            Mollitia beatae ducimus non similique ea rem dolor deleniti error
            odit a, repudiandae doloremque nemo aperiam asperiores! Facere quia
            eum sunt?
          </p>
        </div>
      </section>

      <div
        onClick={() => setStatus(true)}
        className="flex group cursor-pointer"
      >
        <div className="text-muted-foreground text-xs ml-auto flex-center gap-2 group-hover:text-foreground duration-300 group-hover:underline underline-offset-4">
          <CheckCheckIcon className="size-3.5" />
          <span>Mask as read</span>
        </div>
      </div>
    </li>
  );
}
