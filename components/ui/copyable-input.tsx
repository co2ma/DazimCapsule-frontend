"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react"; // 아이콘 라이브러리 (선택사항)

export default function CopyableInput({ value }: { value: string }) {
    const [showToast, setShowToast] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setShowToast(true);

            // 2초 후에 알림창 숨기기
            setTimeout(() => {
                setShowToast(false);
            }, 2000);
        } catch (err) {
            console.error("복사 실패:", err);
        }
    };

    return (
        <div className="relative flex flex-col items-center w-full max-w-md mx-auto">
            {/* 💡 복사 완료 알림 (Toast) */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 50, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute z-20 px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs text-white shadow-xl"
                    >
                        공유용 링크가 클립보드에 복사되었습니다! ✨
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 주소창 영역 */}
            <div
                className="relative flex items-center w-full bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:border-white/40 transition-all cursor-pointer group"
                onClick={handleCopy}
            >
                <input
                    type="text"
                    value={value}
                    readOnly
                    className="w-full bg-transparent p-4 pr-12 text-sm text-white/80 outline-none cursor-pointer"
                />

                {/* 우측 아이콘 버튼 */}
                <div className="absolute right-4 text-white/40 group-hover:text-white/80 transition-colors">
                    {showToast ? (
                        <Check size={18} className="text-green-400" />
                    ) : (
                        <Copy size={18} />
                    )}
                </div>
            </div>
        </div>
    );
}
