import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 flex items-center"
      aria-label="McKinsly"
    >
      <Image src={logo} alt="McKinsly Logo" width={32} height={32} />
      <h1 className={`${poppins.className} font-semibold ml-1`}>McKinsly</h1>
    </Link>
  );
}
