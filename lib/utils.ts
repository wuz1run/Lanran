import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {useRouter} from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function backToMain(router: ReturnType<typeof useRouter>) {
  router.push('/')
}