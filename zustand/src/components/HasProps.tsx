import { FC } from "react";

export const HasProps: FC<{ name: string }> = ({ name }) => {
  return <div>Hello {name}, how are you?</div>;
};
