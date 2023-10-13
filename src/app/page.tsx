import Image from "next/image";
import { SideBar } from "./components/layouts/SildeBar/SideBar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <main>
      <SideBar></SideBar>
    </main>
  );
}
