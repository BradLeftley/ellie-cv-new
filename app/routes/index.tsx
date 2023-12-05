import LocateLocal from "~/components/LocateLocal";
import Nav from "~/components/Nav";
import Header from "~/components/Header";
import UxProject from "~/components/UxProject";
import HartSquarePodcast from "~/components/HartSquarePodcast";
import HartSquareContent from "~/components/HartSquareContent";
import { Outlet } from "@remix-run/react";
import HartSquareWebsite from "~/components/HartSquareWebsite";

export default function Index() {
  return (
    <>
      {/* <Nav />
      <Outlet /> */}
      <Header />
      <HartSquarePodcast />
      <HartSquareContent />
      <HartSquareWebsite />
      {/* <UxProject /> */}
      {/* <LocateLocal /> */}
    </>
  );
}
