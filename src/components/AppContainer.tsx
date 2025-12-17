import type { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className="w-full min-h-full bg-muted">
      <div className="w-full bg-background pt-14">{children}</div>
    </div>
  );
};

export default AppContainer;
