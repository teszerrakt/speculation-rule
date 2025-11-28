/**
 * Builds a full URL path with query parameters from a params object
 * @param basePath - The base path (e.g., "/en-id/flight/fullsearch")
 * @param params - Object containing query parameters
 * @returns Full path with query string
 */
export function buildPathWithParams(
  basePath: string,
  params: Record<string, string | string[] | undefined>,
): string {
  const queryString = new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Array.isArray(value) ? value[0] : value;
        }
        return acc;
      },
      {} as Record<string, string>,
    ),
  ).toString();

  return `${basePath}${queryString ? `?${queryString}` : ""}`;
}

/**
 * Formats query parameters for display
 * @param params - Raw params object from Next.js
 * @returns Formatted key-value pairs
 */
export function formatQueryParams(
  params: Record<string, string | string[] | undefined>,
): Array<{ key: string; value: string }> {
  return Object.entries(params).map(([key, value]) => ({
    key,
    value: Array.isArray(value) ? value.join(", ") : value || "",
  }));
}
