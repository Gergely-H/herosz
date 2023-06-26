import type { FC, PropsWithChildren } from 'react';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-between px-24 py-12">
      {children}
    </main>
  );
};

export default Main;
