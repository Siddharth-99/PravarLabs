import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft, RefreshCcw } from "lucide-react"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-md text-center space-y-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <Logo width={40} height={40} />
        </Link>

        <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">Authentication Error</h1>
          <p className="text-muted-foreground">
            Something went wrong during authentication. This could be due to an expired link or a temporary issue.
          </p>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/auth/login">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try again
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
