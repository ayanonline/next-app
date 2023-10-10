"use client";
import useUserDetails from "@/hooks/useUserDetails";

const AccountPage = () => {
  const { data: userData, isLoading, error }: any = useUserDetails();

  if (isLoading || error) return null;
  const { email, first_name, last_name } = userData?.data?.user;

  return (
    <div>
      <h1 className="text-center text-2xl">Acoount</h1>
      <div className="w-1/4 mx-auto">
        <p className="capitalize">
          Welcome {first_name} {last_name}
        </p>
        <p>Your email: {email}</p>
      </div>
    </div>
  );
};

export default AccountPage;
