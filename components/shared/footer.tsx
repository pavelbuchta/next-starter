import {
  APP_NAME,
  CREDIT_WEBSITE_DOMAIN_NAME,
  CREDIT_WEBSITE_URL,
  MAX_CONTENT_WIDTH,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 flex items-center justify-center border-t border-border py-20">
      <div
        style={{ maxWidth: MAX_CONTENT_WIDTH + "px" }}
        className="flex w-full items-center justify-between px-4 md:px-12"
      >
        <Link href={"#hero"} scroll>
          <div className="h-[30px]">
            <Image
              className="h-full w-auto"
              src={"/logo.svg"}
              width={126}
              height={30}
              alt={APP_NAME + " Logo"}
              priority
            />
          </div>
        </Link>
        <div className="text-sm font-normal text-foreground">
          @{APP_NAME} 2024. <br className="sm:hidden" />
          Built by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href={`https://${CREDIT_WEBSITE_URL}`}
          >
            {CREDIT_WEBSITE_DOMAIN_NAME}
          </Link>
        </div>
      </div>
    </footer>
  );
}
