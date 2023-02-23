import type { MessagesSchema } from "@/i18n/messages.model";
import { formatTimeAgo } from "@vueuse/core";
import { useI18n } from "vue-i18n";

/**
 * Reactive horizontal scroll. Use cases includes when to add shadow on a container to indicate that it's scrollabe
 *
 * @param element
 */
export const useTimeFormatter = (date: Date) => {
  const { t, d } = useI18n<[MessagesSchema]>();

  const time = formatTimeAgo(date, {
    max: "day",
    units: [{ max: 172800000, value: 86400000, name: "day" }],
    fullDateFormatter: (date) => d(date),
    messages: {
      justNow: t("time-formatter.today"),
      day: (d: number) => {
        console.log(d);
        if (d === 0) {
          return t("time-formatter.today");
        } else if (d === 1) {
          return t("time-formatter.yesterday");
        }
        return d + "";
      },
      past: "past",
      future: "future",
      invalid: "invalid",
    },
  });

  return { time };
};
