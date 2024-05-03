import { useRouter } from "next/router";
import { SupaImage } from "@/componentes/SupaImage";
import { getProvider } from "@/services/getProvider";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { securePage } from "@/services/securePage";
import Link from "next/link";

export default securePage(function ServiceTypeProvidersPage() {
  const router = useRouter();
  const id = router.query.id;
  const supabase = useSupabaseClient();
  const providerQuery = useQuery({
    queryKey: ["provider", id], // Agrega el ID al queryKey para identificar al proveedor
    queryFn: async () => getProvider(supabase, id),
  });

  const goToServiceTypes = () => {
    router.push("/service_types");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4 text-center">
          <h1>Provider</h1>
        </div>
      </div>
      {providerQuery.isLoading && <div>Loading...</div>}
      <div className="row">
        {providerQuery.data?.map((person) => (
          <div key={person.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <SupaImage
                bucket="pictures"
                fileName={person.picture}
                width="auto"
                borderRadius="20px"
                className="rounded-top"
              />
              <h3>{person.name}</h3>
              <div className="card-body text-center mb-3">
                {" "}
                {/* Mover el div aquí */}
                <h5 className="card-title">{person.description}</h5>
                <Link href={"/provider/" + person.id}>
                  <div className="btn btn-primary">Detail</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* Cerrar el div de la row */}
      <button onClick={goToServiceTypes}>All Services</button>
    </div>
  );
});
