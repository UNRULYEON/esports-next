"use server";

import { cookies } from "next/headers";
import { Locale, defaultLocale } from "@/i18n";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "ESPORTS_NEXT_LOCALE";

export async function getUserLocale() {
  const cookie = await cookies();

  return cookie.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookie = await cookies();

  cookie.set(COOKIE_NAME, locale);
}