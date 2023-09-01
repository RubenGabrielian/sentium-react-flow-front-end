import { NextResponse } from "next/server";

export async function middleware(req) {
  let verify =
    (await req.cookies.get("next-auth.session-token")) ||
    (await req.cookies.get("__Secure-next-auth.session-token")) ||
    null;
  let url = req.url;
  if (
    (!verify && url.includes("/dashboard")) ||
    (!verify && url.includes("/to-do-list"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
