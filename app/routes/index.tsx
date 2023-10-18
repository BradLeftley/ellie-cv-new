import LocateLocal from "~/components/LocateLocal";
import Nav from "~/components/Nav";
import SimplyGlutenFree from "~/components/SimplyGlutenFree";
import UxProject from "~/components/UxProject";

export default function Index() {
  return (
    <>
      <Nav />
      <UxProject />
      <SimplyGlutenFree />
      <LocateLocal />
    </>
  );
}
