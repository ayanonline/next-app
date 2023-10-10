import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Login</h1>
      <div className="w-1/4 mx-auto">
        <LoginForm />
        <p className="mt-4 hover:underline">
          <Link href="/signup">Don't have account? Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
