import { ReactNode } from "react";

export default function Layout(props: ReactNode) {
  return (
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
  );
}
