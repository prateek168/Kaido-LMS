"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition, useEffect } from "react";
import { toast } from "sonner";

const VerifyRequest = () => {
  const [otp, setOtp] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const params = useSearchParams();
  const router = useRouter();
  const email = params.get("email") as string;
  const isOtpCompleted = otp.length === 6;

  useEffect(() => {
    if (!email) {
      toast.error("Email parameter is missing");
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [email, router]);

  function verifyOtp() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed In Successfully");
            router.push("/"); 
          },
          onError: () => {
            toast.error("Error verifying Email/OTP");
          },
        },
      });
    });
  }

  if (isLoading) {
    return (
      <Card className="w-full mx-auto">
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="size-6 animate-spin" />
          <span className="ml-2">Loading...</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please Check your Email</CardTitle>
        <CardDescription>
          We have sent a verification email code to your email address. Please
          check your email and paste the code below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col space-y-2 items-center">
          <InputOTP
            maxLength={6}
            className="gap-2"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>
        <Button
          onClick={verifyOtp}
          className="w-full"
          disabled={isPending || !isOtpCompleted}
        >
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>Verify Account</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default VerifyRequest;
