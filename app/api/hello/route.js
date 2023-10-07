import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ body: "hello" }, { status: 200 });
}
