// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // /form/으로 시작하는 경로만 검사
    if (pathname.startsWith("/form/")) {
        const id = pathname.split("/")[2]; // /form/[id] 에서 id 추출

        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

        // 형식이 틀렸다면 메인 페이지로 리다이렉트 시킴
        if (!uuidRegex.test(id)) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
    matcher: "/form/:path*",
};
