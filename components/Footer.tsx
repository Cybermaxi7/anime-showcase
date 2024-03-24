import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
            <p className="text-base font-bold text-white">
                @2023 Anime Showcase
            </p>
            <Image
                src="/logo.svg"
                alt="logo"
                width={47}
                height={44}
                className="object-contain"
            />
            <h2>
                Built by{" "}
                <Link
                    href="https://www.youtube.com/@javascriptmastery"
                    className="font-bold text-orange-600 italic"
                >
                    Javascript Mastery
                </Link>{" "}
                and improved by{" "}
                <Link
                    href="https://moses-agbe.vercel.app"
                    className="font-bold text-orange-600 italic"
                >
                    Cybermaxi
                </Link>
            </h2>
            {/* <div className="flex items-center gap-6">
        <Image
          src="/tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="/instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="/twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div> */}
        </footer>
    );
}

export default Footer;
