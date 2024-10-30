import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
         🔐 Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div className="justify-center">
          <LoginButton>
          <Button size="lg" variant="secondary">
            Sign In
          </Button>
          </LoginButton>
        </div>
      </div>

    </main>
  );
}
