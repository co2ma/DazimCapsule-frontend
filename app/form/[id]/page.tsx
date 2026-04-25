// app/form/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import CopyableInput from "@/components/ui/copyable-input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FadeScaleTransition from "@/components/ui/fade-scale-transition";

export default function FormPage() {
    const params = useParams();
    const [currUrl, setCurrUrl] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        setCurrUrl(window.location.href);
    }, []);

    const uniqueId = params.id; // URL에서 시드 값을 가져옵니다.

    return (
        <div className="relative z-10 flex items-center justify-center min-h-screen">
            <FadeScaleTransition
                show={isVisible}
                className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl relative"
            >
                <h2 className="text-xl text-white font-light mb-4 text-center">
                    새로운 다짐 캡슐
                </h2>
                <h3 className="text-white">공유용 링크</h3>
                <div className="text-sm text-white/60 mb-6 text-center">
                    <CopyableInput value={currUrl} />
                </div>

                {/* 여기에 폼 입력을 만드시면 됩니다 */}
                <form>
                    <textarea
                        className="w-full bg-white/5 border border-white/20 rounded-lg p-4 focus:outline-none focus:border-white/50"
                        placeholder="미래의 나에게 보내는 한 마디..."
                    />
                    <Button className="cursor-pointer">
                        미래에서 기다리기
                    </Button>
                </form>
            </FadeScaleTransition>
        </div>
    );
}
