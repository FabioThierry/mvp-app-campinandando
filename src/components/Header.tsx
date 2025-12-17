import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6 lg:px-8 fixed top-0 z-40 w-full">
      <SidebarTrigger />
    </header>
  );
}
