import { getUserLocale } from "@/utils";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    timeZone: "UTC",
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
});
