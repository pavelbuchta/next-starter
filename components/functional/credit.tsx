"use client";

import { CREDIT_WEBSITE_DOMAIN_NAME } from "@/lib/constants";

export default function Credit() {
  console.log(
    "%c \uD83E\uDD19 Built by " + CREDIT_WEBSITE_DOMAIN_NAME,
    "font-size: 12px;font-family: monospace;background: black;display: inline-block;color: white;padding: 15px;padding-left: 8px; border: 2px solid white;"
  );
  return null;
}
