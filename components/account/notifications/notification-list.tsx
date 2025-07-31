import NotificationItem from "@/components/account/notifications/notification-item";
import { Button } from "@/components/ui/button";

export default function NotificationList() {
  return (
    <div className="space-y-4">
      <header className="flex-center gap-4 justify-between">
        <p>3 unread notifications</p>
        <Button>Mask as read all</Button>
      </header>

      <ul className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, id) => (
          <NotificationItem key={id} />
        ))}
      </ul>
    </div>
  );
}
