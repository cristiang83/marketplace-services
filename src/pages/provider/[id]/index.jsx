import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getPerson } from "@/services/getProvider";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { SupaImage } from "@/componentes/SupaImage";
import Link from "next/link";
import { securePage } from "@/services/securePage";



export default securePage(function PersonPage() {
  const router = useRouter();
  const id = router.query.id;
  const supabase = useSupabaseClient();

  const personQuery = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPerson(supabase, id),
  });

  return (
    <div className="service_typescard">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h1>{personQuery.data?.name}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 text-center">
            {personQuery.data?.picture && (
              <SupaImage
                bucket="pictures"
                fileName={personQuery.data.picture}
                borderRadius="200px"
              />
            )}
          </div>
          <div className="col-md-6 mb-4">
            <h4>Email: {personQuery.data?.email}</h4>
            <h4>Address: {personQuery.data?.address}</h4>
            <h4>Phone: {personQuery.data?.phone}</h4>
            <h4>DOB: {personQuery.data?.dob}</h4>
            <h4>Description: {personQuery.data?.description}</h4>
            <h4>Services: {personQuery.data?.service_types?.name}</h4>
          </div>
        </div>

        <div>
          <Link href="/service_types">All Services</Link>
          <Link href={"/service_types/" + personQuery.data?.service_types_id}>
            All {personQuery.data?.service_types.name}
          </Link>
        </div>
      </div>
    </div>
  );
});
