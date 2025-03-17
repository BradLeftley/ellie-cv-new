import Header from "~/components/Header";
import HartSquarePodcast from "~/components/HartSquarePodcast";
import HartSquareContent from "~/components/HartSquareContent";
import HartSquareWebsite from "~/components/HartSquareWebsite";
import UxProject from "~/components/UxProject";
import LocateLocal from "~/components/LocateLocal";
import IconLibrary from "~/components/IconLibrary";

export default function Index() {
  return (
    <>
      {/* <Nav />
      <Outlet /> */}
      <Header />
      <HartSquareWebsite />
      <HartSquareContent />
      <UxProject />
      <LocateLocal />
      <IconLibrary />
      <HartSquarePodcast />
    </>
  );
}
