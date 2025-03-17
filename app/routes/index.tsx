import Header from "~/components/Header";
import HartSquarePodcast from "~/components/HartSquarePodcast";
import HartSquareContent from "~/components/HartSquareContent";
import HartSquareWebsite from "~/components/HartSquareWebsite";
import UxProject from "~/components/UxProject";
import LocateLocal from "~/components/LocateLocal";

export default function Index() {
  return (
    <>
      {/* <Nav />
      <Outlet /> */}
      <Header />
      <HartSquarePodcast />
      <HartSquareContent />
      <HartSquareWebsite />
      <UxProject />
      <LocateLocal />
    </>
  );
}
