import { PropsWithChildren } from "react";
// type ComponentProps = { name: string; id: number; children?: React.ReactNode };
type ComponentProps = PropsWithChildren<{
  name: string,
  id: number
}>

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{id}</h2>
      {children}
    </div>
  );
}
export default Component;
