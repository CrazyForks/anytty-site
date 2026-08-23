import { ArrowDownToLine, BookOpen, Cloud, Menu, PanelLeft } from "lucide-react";
import { Fragment } from "react";

import { GithubIcon } from "@/components/github-icon";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
  group?: string;
  current?: boolean;
  emphasis?: boolean;
  kind?: "default" | "github" | "cloud" | "download";
}

interface NavigationSheetProps {
  label: string;
  title: string;
  description?: string;
  closeLabel: string;
  items: NavigationItem[];
  trigger?: "menu" | "docs";
}

export function NavigationSheet({
  label,
  title,
  description,
  closeLabel,
  items,
  trigger = "menu",
}: NavigationSheetProps) {
  const TriggerIcon = trigger === "docs" ? PanelLeft : Menu;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant={trigger === "docs" ? "outline" : "ghost"}
          size={trigger === "docs" ? "default" : "icon"}
          className={cn("h-11", trigger === "docs" ? "justify-start px-3 font-normal lg:hidden" : "w-11 rounded-full bg-[var(--chip-soft)] text-zinc-200 hover:bg-[var(--chip)] hover:text-zinc-100 lg:hidden")}
          aria-label={label}
        >
          <TriggerIcon aria-hidden="true" />
          {trigger === "docs" && <span>{label}</span>}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" closeLabel={closeLabel} className="w-[min(88vw,22rem)] border-0 bg-zinc-950 text-zinc-100 p-0">
        <div className="flex h-full min-h-0 flex-col px-5 pb-6 pt-16">
          <SheetHeader className="text-left">
            <SheetTitle className="text-base font-medium">{title}</SheetTitle>
            {description && <SheetDescription className="font-normal leading-6">{description}</SheetDescription>}
          </SheetHeader>
          <nav className="mt-8 flex min-h-0 flex-col gap-1 overflow-y-auto pb-4" aria-label={label}>
            {items.map((item, index) => {
              const Icon = item.kind === "github"
                ? GithubIcon
                : item.kind === "cloud"
                  ? Cloud
                  : item.kind === "download"
                    ? ArrowDownToLine
                    : item.kind === "default" && trigger === "docs"
                      ? BookOpen
                      : null;
              const showGroup = item.group && (index === 0 || items[index - 1]?.group !== item.group);
              return <Fragment key={`${item.label}-${item.href}`}>
                {showGroup && <p className={cn("px-3 pb-1 text-[11px] font-medium text-zinc-500", index > 0 && "pt-5")}>{item.group}</p>}
                <SheetClose asChild>
                    <a
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={cn(
                        buttonVariants({ variant: item.emphasis ? "default" : item.current ? "secondary" : "ghost" }),
                        "h-auto min-h-10 justify-start rounded-md px-3 py-2 text-sm font-normal",
                      )}
                    >
                      {Icon && <Icon aria-hidden="true" />}
                      {item.label}
                    </a>
                </SheetClose>
              </Fragment>;
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
