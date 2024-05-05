import { useRouter } from "next/router";
import { SupaImage } from "@/componentes/SupaImage";
import { getProvider } from "@/services/getProvider";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { securePage } from "@/services/securePage";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { getService_type } from "@/services/getService_types";
import Logout from "@/componentes/Logout";

export default securePage(function ServiceTypeProvidersPage() {
  const router = useRouter();
  const id = router.query.id;
  const supabase = useSupabaseClient();
  const providerQuery = useQuery({
    queryKey: ["provider", id], // Agrega el ID al queryKey para identificar al proveedor
    queryFn: async () => getProvider(supabase, id),
  });
  const serviceTypeQuery = useQuery({
    queryKey: ["service_type", id],
    queryFn: async () => getService_type(supabase, id),
  });

  const goToServiceTypes = () => {
    router.push("/service_types");
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/service_types">
              All Services
              </a>
            </li>
          </ul>
        </div>
        <Logout />
      </nav>
      <div className="row">
        <div className="col-md-7 mb-4 text-center d-flex justify-content-end ">
          <h1> {serviceTypeQuery.data?.name}</h1>
        </div>
      </div>
      {providerQuery.isLoading && <div>Loading...</div>}
      <div className="row">
        {providerQuery.data?.map((person) => (
          <div key={person.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem"}}>
              <SupaImage
                bucket="pictures"
                fileName={person.picture}
                width="auto"
                borderRadius="20px"
                className="card-img-pro"
                
              />
              <h3 className="textcenter">{person.name}</h3>
              <div className="card-body text-center mb-3">
                {" "}
                {/* Mover el div aquí */}
                
                <Link href={"/provider/" + person.id}>
                  <div className="btn btn-primary">Detail</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      
    </div>
  );
});
