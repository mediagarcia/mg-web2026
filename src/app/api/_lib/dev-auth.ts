import { NextResponse } from "next/server";

/**
 * Checks that the request is from a development environment.
 * Defense-in-depth: requires both NODE_ENV=development AND
 * a matching DEV_API_TOKEN if one is configured.
 */
export function requireDev(request?: Request): NextResponse | null {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Optional token check for extra safety
  const configuredToken = process.env.DEV_API_TOKEN;
  if (configuredToken) {
    const providedToken =
      request?.headers.get("x-dev-token") ?? null;
    if (providedToken !== configuredToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return null; // Authorized
}
