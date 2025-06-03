// utils/navigation.ts
"use client";
import { useRouter } from "next/navigation";

export function backToMain(router: ReturnType<typeof useRouter>) {
    router.push('/');
}