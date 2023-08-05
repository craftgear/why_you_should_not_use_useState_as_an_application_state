import { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div style={{ padding: 20 }}>{children}</div>
);
