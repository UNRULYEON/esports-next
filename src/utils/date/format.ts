"use client";

import { format as DateFNSFormat } from "date-fns";
import { enUS, nl } from "date-fns/locale";

const locales = { enUS, nl };

Object.assign(window, { __localeId__: "enUS" });
window.__localeId__ = nl.code;

// by providing a default string of 'PP' or any of its variants for `formatStr`
// it will format dates in whichever way is appropriate to the locale
export const format: typeof DateFNSFormat = (
  date,
  formatStr = "PP",
  options,
) => {
  return DateFNSFormat(date, formatStr, {
    locale: locales[window.__localeId__ as keyof typeof locales],
    ...options,
  });
};
