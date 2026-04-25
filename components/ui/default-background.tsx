"use client"; // 클라이언트 사이드에서만 실행되도록 설정 (Math.random 사용 시 필수)

import { useEffect, useState } from "react";

export function DefaultBackground() {
    // Next.js 하이드레이션 오류(서버/클라이언트 랜덤값 불일치) 방지를 위해 마운트 후 렌더링
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="absolute inset-0 bg-black" />;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/evening-scene.jpg')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/70 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            // 애니메이션 지연 시간과 속도를 다르게 주어 흐르는 느낌 극대화
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                            filter: "blur(0.5px)", // 약간의 번짐 효과로 더 몽환적이게
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
