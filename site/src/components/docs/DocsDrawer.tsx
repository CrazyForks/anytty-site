import { useEffect, useRef, useState, type ReactNode } from 'react';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Props {
  title: string;
  label: string;
  closeLabel: string;
  description: string;
  children: ReactNode;
}

export function DocsDrawer({ title, label, closeLabel, description, children }: Props) {
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <div className="mb-7 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="min-h-11 gap-2 px-3" aria-label={label}>
            <PanelLeft aria-hidden="true" />
            {title}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" closeLabel={closeLabel}
          className="flex h-dvh w-[min(88vw,22rem)] flex-col gap-0 p-0 data-[state=open]:duration-200 data-[state=closed]:duration-200 [&>button]:right-3 [&>button]:top-3 [&>button]:flex [&>button]:size-11 [&>button]:items-center [&>button]:justify-center"
          onOpenAutoFocus={event => {
            const current = nav.current?.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
            if (current) {
              event.preventDefault();
              current.focus();
              current.scrollIntoView({ block: 'nearest' });
            }
          }}>
          <SheetHeader className="shrink-0 border-b border-border px-5 pb-4 pt-[max(1.25rem,env(safe-area-inset-top))] text-left">
            <SheetTitle className="pr-12 text-base font-medium">{title}</SheetTitle>
            <SheetDescription className="sr-only">{description}</SheetDescription>
          </SheetHeader>
          <nav ref={nav} aria-label={title}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
            onClick={event => {
              if (event.target instanceof Element && event.target.closest('a[href]') && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) setOpen(false);
            }}>
            {children}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
