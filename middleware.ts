import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest, event: NextFetchEvent){
    if(req.nextUrl.pathname === "/usr/login"){
        event.waitUntil((async () => {
            //Great for loggin, triggering an event, etc
        })());
    }
    if(req.geo?.country === "US"){
        return new Response("Blocked for legal reasons", {status:451})
    }
    if(req.geo?.country == "US"){
        return NextResponse.rewrite("/US")
    }
    if(req.cookies['returningUser']){
        return NextResponse.rewrite("/UserData")
    }
    return
}


