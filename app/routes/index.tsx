import LocateLocal from "~/components/LocateLocal";
import Nav from "~/components/Nav";
import Header from "~/components/Header";
import UxProject from "~/components/UxProject";
import HartSquarePodcast from "~/components/HartSquarePodcast";
import HartSquareContent from "~/components/HartSquareContent";

export default function Index() {
  return (
    <>
      <Nav />
      <Header />
      <HartSquarePodcast />
      <HartSquareContent />
      {/* <UxProject /> */}
      {/* <LocateLocal /> */}
    </>
  );
}
