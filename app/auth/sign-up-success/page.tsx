import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Mail, ArrowLeft } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-md text-center space-y-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <Logo width={40} height={40} />
        </Link>

        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Mail className="w-10 h-10 text-primary" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">Check your email</h1>
          <p className="text-muted-foreground">
            We&apos;ve sent you a confirmation link. Please check your email and click the link to activate your account.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
          <p>Didn&apos;t receive the email? Check your spam folder or contact support if you need help.</p>
        </div>

        <div className="space-y-3">
          <Button asChild variant="outline" className="w-full">
            <Link href="/auth/login">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to sign in
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
