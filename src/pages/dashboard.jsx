import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { securePage } from "@/services/securePage";
import { IoIosLogOut } from "react-icons/io";


export default securePage(function Dashboard() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const user = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div>
      Dashboard for <strong>{user?.email || "Not authenticated"}</strong>
      
      <IoIosLogOut onClick={handleSignOut} />
      
    </div>
  );
});