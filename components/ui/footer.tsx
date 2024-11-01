import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="flex items-center justify-center h-[320px]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3 flex items-center justify-center">
              <Link
                href="/"
                className=" shrink-0 flex flex-col items-center"
                aria-label="McKinsly"
              >
                <Image src={logo} alt="McKinsly Logo" width={57} height={57} />
                <h1 className={`${poppins.className} font-semibold ml-1 mt-3`}>
                  McKinsly
                </h1>
              </Link>{" "}
            </div>
            <ul className="flex items-center justify-center mt-3">
              <li>
                <a
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  href="#0"
                  aria-label="Medium"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="p-2 flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75463 7.958V10.706C8.40854 10.6147 8.04638 10.6023 7.69484 10.6696C7.34331 10.7369 7.01136 10.8822 6.72346 11.0949C6.43556 11.3076 6.19906 11.5821 6.03138 11.8983C5.86371 12.2146 5.76913 12.5644 5.75463 12.922C5.73428 13.2303 5.78023 13.5395 5.88938 13.8285C5.99854 14.1176 6.16837 14.38 6.38745 14.5979C6.60652 14.8158 6.86974 14.9843 7.15939 15.092C7.44904 15.1996 7.7584 15.244 8.06663 15.222C8.37744 15.2456 8.68968 15.2015 8.9818 15.0928C9.27392 14.984 9.53897 14.8132 9.75866 14.5921C9.97836 14.371 10.1475 14.1048 10.2543 13.812C10.3612 13.5192 10.4033 13.2067 10.3776 12.896V2H13.0966C13.5596 4.876 14.9966 5.544 16.9236 5.852V8.608C15.5889 8.49893 14.3013 8.06424 13.1736 7.342V12.787C13.1716 15.25 11.7116 18 8.08663 18C7.40669 17.9969 6.7342 17.8581 6.10858 17.5918C5.48295 17.3255 4.91677 16.937 4.44319 16.4491C3.96962 15.9612 3.59819 15.3836 3.35065 14.7503C3.10312 14.1171 2.98446 13.4407 3.00163 12.761C3.02301 12.0531 3.19421 11.3579 3.50395 10.721C3.81369 10.0842 4.25491 9.52023 4.79854 9.06637C5.34216 8.61252 5.97583 8.27907 6.65775 8.08802C7.33966 7.89697 8.05434 7.85265 8.75463 7.958Z"
                      fill="#6366F1"
                      fill-opacity="0.88"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9683 3.27602C17.9557 3.21697 17.9276 3.16236 17.8868 3.11787C17.846 3.07338 17.794 3.04063 17.7363 3.02302C17.526 2.98109 17.3084 2.99664 17.1063 3.06802C17.1063 3.06802 3.08725 8.10602 2.28625 8.66402C2.11425 8.78502 2.05625 8.85402 2.02725 8.93602C1.88925 9.33602 2.32025 9.50902 2.32025 9.50902L5.93325 10.686C5.99426 10.697 6.05701 10.6932 6.11625 10.675C6.93825 10.156 14.3863 5.45302 14.8163 5.29502C14.8843 5.27502 14.9343 5.29502 14.9163 5.34402C14.7443 5.94402 8.31025 11.663 8.27525 11.698C8.25818 11.7123 8.2448 11.7305 8.23627 11.751C8.22774 11.7716 8.2243 11.7939 8.22625 11.816L7.88925 15.344C7.88925 15.344 7.74725 16.444 8.84525 15.344C9.62425 14.565 10.3723 13.919 10.7453 13.606C11.9873 14.464 13.3243 15.412 13.9013 15.906C13.9979 16.0001 14.1125 16.0737 14.2383 16.1223C14.3641 16.171 14.4985 16.1936 14.6333 16.189C14.7992 16.1685 14.955 16.098 15.0801 15.987C15.2051 15.8759 15.2934 15.7294 15.3333 15.567C15.3333 15.567 17.8943 5.29202 17.9793 3.90902C17.9873 3.77402 18.0003 3.69202 18.0003 3.59202C18.0039 3.48572 17.9931 3.37942 17.9683 3.27602Z"
                      fill="#6366F1"
                      fill-opacity="0.88"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="text-sm text-center mt-2" >
              <p className="mb-3 text-indigo-200/65">© 2024 Acclogic Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
