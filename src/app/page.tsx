import Container from "@/components/Container";
import Homecontainer from "@/components/homecontainer";
import MobileBottomMenu from "@/components/MobileView/MobileBottomMenu";
import MobileTopView from "@/components/MobileView/MobileTopView";
import StoryNavBar from "@/components/MobileView/StoryNavBar";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Container className="">
        <MobileTopView />
        <StoryNavBar/>
      <div className="mt-4">
          <Homecontainer />
      </div>
      </Container>
      <MobileBottomMenu />
    </div>
  );
}
