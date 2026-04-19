import Container from "@/components/Container";
import Homecontainer from "@/components/homecontainer";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="flex justify-between items-center">
    <Homecontainer/>
    <ModeToggle/>
    </Container>
  );
}
