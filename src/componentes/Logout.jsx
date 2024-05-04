import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { securePage } from "@/services/securePage";
import { IoIosLogOut } from "react-icons/io";

export default securePage(function Logout() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const user = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div>
      <IoIosLogOut onClick={handleSignOut} 
      style={{ fontSize: "2rem" }}
      />
    </div>
  );
});