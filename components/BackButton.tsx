"use client"

import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter()
  return (
    <button onClick={router.back} className="bg-orange-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg">
    Go Back
</button>)
}