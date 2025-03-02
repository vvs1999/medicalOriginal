"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <p className="text-lg text-gray-600 mb-8">We apologize for the inconvenience.</p>
        <Button onClick={reset} className="mx-2">
          Try again
        </Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")} className="mx-2">
          Return Home
        </Button>
      </div>
    </div>
  )
}

