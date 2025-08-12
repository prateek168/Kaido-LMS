import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
      </CardHeader>
    </Card>    
  );
};
export default LoginPage;
