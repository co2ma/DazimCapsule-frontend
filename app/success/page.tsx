"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FadeScaleTransition from "@/components/ui/fade-scale-transition";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/check-icon";
import { OutlineDetail } from "@/components/ui/outline_detail";

export default function SuccessPage() {
    const router = useRouter();
    const [step, setStep] = useState("animating");

    useEffect(() => {
        // 페이지 렌더링 후 2.5초 뒤에 캡슐 애니메이션을 끝내고 완료 폼을 띄움
        const timer = setTimeout(() => {
            setStep("success");
        }, 2500);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 클린업
    }, []);

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen overflow-hidden">
            {/* (수정됨) 캡슐 애니메이션을 위한 CSS Keyframes - 더 크고 둥근 움직임으로 변경 */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes flyToFuture {
                    0% { transform: translateY(150px) scale(0.3) rotate(0deg); opacity: 0; }
                    20% { transform: translateY(0) scale(1.2) rotate(10deg); opacity: 1; }
                    60% { transform: translateY(-50px) scale(1) rotate(-5deg); opacity: 1; }
                    100% { transform: translateY(-600px) scale(0.1) rotate(180deg); opacity: 0; }
                }
                .animate-fly-to-future {
                    animation: flyToFuture 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
            `}} />

            {/* 1. 캡슐 애니메이션 영역 */}
            {step === "animating" && (
                <div className="absolute flex items-center justify-center animate-fly-to-future">
                    {/* (완전히 수정됨) 알약에서 동그란 뽑기 캡슐로 변경 */}
                    <div className="relative w-48 h-48 rounded-full border-2 border-white/60 backdrop-blur-md shadow-[0_0_80px_rgba(255,255,255,0.6)] overflow-hidden flex flex-col justify-center items-center bg-gradient-to-b from-white/95 to-white/15">

                        {/* 캡슐의 중간 이음새 밴드 */}
                        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white/70 transform -translate-y-1/2 rounded-full z-10 shadow-sm border border-white/80"></div>

                        {/* 메인 반사 하이라이트 (더 크고 둥글게) */}
                        <div className="absolute top-6 left-6 w-10 h-10 bg-white/80 rounded-full blur-[10px] opacity-90"></div>

                        {/* 보조 반사 하이라이트 (반대편) */}
                        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white/40 rounded-full blur-[2px]"></div>

                        {/* 캡슐 내부의 내용물 (심플한 종이 느낌) */}
                        <div className="w-1/3 h-1/4 bg-white/20 rounded-sm transform rotate-[-15deg] shadow-inner border border-white/30"></div>
                    </div>
                </div>
            )}

            {/* 2. 성공(전달 완료) 메시지 폼 */}
            {step === "success" && (
                <div className="absolute w-full max-w-md">
                    <FadeScaleTransition
                        show={true}
                        className="w-full p-10 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center relative"
                    >
                        {/* 체크 아이콘 */}
                        <CheckIcon/>

                        <h2 className="text-2xl text-white font-light mb-3">
                            폼이 전달 되었습니다
                        </h2>
                        <p className="text-white/70 text-base font-light mb-8">
                            미래의 당신에게 무사히 도착할 거예요.
                        </p>

                        <Button
                            onClick={() => router.push('/')} // 메인 홈으로 돌아가기 버튼 (경로 수정 가능)
                            className="w-full py-6 text-sm font-light tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                            variant="ghost"
                        >
                            메인으로 돌아가기
                        </Button>

                        {/* 장식용 모서리 선 */}
                        <OutlineDetail/>
                    </FadeScaleTransition>
                </div>
            )}
        </div>
    );
}