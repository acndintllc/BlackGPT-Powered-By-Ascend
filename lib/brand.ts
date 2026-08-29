/**
 * Central brand identity for the application.
 *
 * Every user-facing surface (metadata, layout views, components) should read
 * from here rather than hard-coding the product name, so a future rename is a
 * single-file change.
 */

/** Product name. */
export const APP_NAME = "BlackGPT";

/** Parent brand the product ships under. */
export const PARENT_BRAND = "Ascend";

/** Fully qualified name, e.g. for page titles and OpenGraph. */
export const APP_FULL_NAME = `${APP_NAME} by ${PARENT_BRAND}`;

/** Short marketing description used for metadata. */
export const APP_DESCRIPTION = `${APP_NAME} is an AI assistant from ${PARENT_BRAND}.`;

/** Slug used for telemetry service names, package identity, and storage keys. */
export const APP_SLUG = "blackgpt";

/** Canonical public origin, overridable per deployment. */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://blackgpt.ai";

/**
 * Brand artwork. Both are black-on-transparent, so surfaces that sit on a
 * dark background invert them (`dark:invert`) rather than shipping a second
 * copy. Paths are plain `public/` paths — `next/image` applies any basePath.
 */

/** Full "Black [mark] GPT" wordmark. */
export const LOGO_WORDMARK = "/images/blackgpt-wordmark.png";

/** Square mark on its own, for tight slots like the collapsed sidebar. */
export const LOGO_MARK = "/images/blackgpt-mark.png";
