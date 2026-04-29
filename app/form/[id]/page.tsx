"use client";

import { useParams, useRouter } from "next/navigation";
import CopyableInput from "@/components/ui/copyable-input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FadeScaleTransition from "@/components/ui/fade-scale-transition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { OutlineDetail } from "@/components/ui/outline_detail";

export default function FormPage() {
    const params = useParams();
    const router = useRouter();
    const [currUrl, setCurrUrl] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setCurrUrl(window.location.href);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼 기본 제출(새로고침) 방지

        setIsVisible(false); // 1. 폼이 스르륵 사라짐

        // 2. 폼이 사라지는 애니메이션(0.5초)이 끝난 후 완료 페이지로 이동
        setTimeout(() => {
            // id 값을 살려서 이동하고 싶다면 `/form/${params.id}/success` 등으로 변경할 수 있습니다.
            // 여기서는 심플하게 `/success` 라우트로 이동한다고 가정했습니다.
            router.push(`/success`);
        }, 500);
    };

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
                    <Input />
                </div>
                <h3 className="text-white">이메일</h3>
                <div className="text-sm text-white/60 mb-6 text-center">
                    <Input />
                </div>

                <form onSubmit={handleSubmit}>
                    <h3 className="text-white">내용</h3>
                    <Textarea className="text-white/60 mb-6" placeholder="미래에 보내는 나의 이야기..." />
                    <Button
                        type="submit"
                        className="w-full py-6 text-base font-light tracking-wider bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                        variant="ghost"
                    >
                        미래에서 기다리기
                    </Button>
                </form>

                <OutlineDetail/>
            </FadeScaleTransition>
        </div>
    );
}