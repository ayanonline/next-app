import SignupForm from "@/components/SignupForm";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Signup</h1>
      <div className="w-1/4 mx-auto">
        <SignupForm />
        <p className="mt-4 hover:underline">
          <Link href="/login">Have account? Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
