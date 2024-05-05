import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getPerson } from "@/services/getProvider";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { SupaImage } from "@/componentes/SupaImage";
import Link from "next/link";
import { securePage } from "@/services/securePage";
import Logout from "@/componentes/Logout";

export default securePage(function PersonPage() {
  const router = useRouter();
  const id = router.query.id;
  const supabase = useSupabaseClient();

  const personQuery = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPerson(supabase, id),
  });

  return (
    <section className="service_typescard">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/service_types"
              >
                All Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href={"/service_types/" + personQuery.data?.service_types_id}
              >
                All {personQuery.data?.service_types.name}
              </a>
            </li>
          </ul>
        </div>
        <Logout />
      </nav>

      <div className="typecard">
        <div className="row">
          <div className="col-md-6 mb-4 text-center">
            <article className="foto">
              {personQuery.data?.picture && (
                <SupaImage
                  bucket="pictures"
                  fileName={personQuery.data.picture}
                />
              )}
            </article>
          </div>

          <div className="providerdata col-md-3 mb-4">
            <div className="col-md-2 mb-4 text-center">
              <h1>{personQuery.data?.name}</h1>
            </div>
            <h4>Services: {personQuery.data?.service_types?.name}</h4>
            <h5>Email: {personQuery.data?.email}</h5>
            <h5>Address: {personQuery.data?.address}</h5>
            <h5>Phone: {personQuery.data?.phone}</h5>
            <h5>DOB: {personQuery.data?.dob}</h5>
            <h5>Description:</h5> <p>{personQuery.data?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
});
