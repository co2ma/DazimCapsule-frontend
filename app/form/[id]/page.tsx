"use client";

import { useParams } from "next/navigation";
import CopyableInput from "@/components/ui/copyable-input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FadeScaleTransition from "@/components/ui/fade-scale-transition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function FormPage() {
    const params = useParams();
    const [currUrl, setCurrUrl] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        setCurrUrl(window.location.href);
    }, []);

    const router = useRouter();

    const handleStart = () => {
        setIsVisible(false); // 애니메이션 시작 (사라짐)

        setTimeout(() => {
            router.push(`/form`);
        }, 500);
    };

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
                <h3 className="text-white">이름 / 닉네임</h3>
                <div className="text-sm text-white/60 mb-6 text-center">
                    <Input/>
                </div>
                <h3 className="text-white">이메일</h3>
                <div className="text-sm text-white/60 mb-6 text-center">
                    <Input/>
                </div>

                {/* 여기에 폼 입력을 만드시면 됩니다 */}
                <form>
                    <h3 className="text-white">내용</h3>
                    <Textarea className="text-white/60 mb-6" placeholder="미래에 보내는 나의 이야기..."/>
                    <Button onClick={handleStart} className="w-full py-6 text-base font-light tracking-wider bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                                variant="ghost">
                        미래에서 기다리기
                    </Button>
                </form>
                {/* 장식용 요소들 */}
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-white/30 rounded-tl-2xl" />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-white/30 rounded-br-2xl" />
            </FadeScaleTransition>
        </div>
    );
}