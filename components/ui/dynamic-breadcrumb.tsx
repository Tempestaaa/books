// components/dynamic-breadcrumb.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { iBreadcrumb } from "@/types/common.type";

interface DynamicBreadcrumbProps {
  items: iBreadcrumb[];
}

export function DynamicBreadcrumb({ items }: DynamicBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-xs">
        {items.map((item, index) => (
          <BreadcrumbItem key={item.label}>
            {item.href ? (
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            )}
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
