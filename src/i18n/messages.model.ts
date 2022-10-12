import type sv from "@/locales/sv.json";
import type { SUPPORTED_LOCALES } from "./load-locale";

export type MessagesSchema = typeof sv;
export type SupportedLocales = typeof SUPPORTED_LOCALES[number];
