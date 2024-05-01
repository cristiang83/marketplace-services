import { SupaImage } from "@/componentes/SupaImage";
import { getService_types } from "@/services/getService_types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { securePage } from "@/services/securePage";

export default function ServiceTypesPage() {
  const supabase = useSupabaseClient();
  const service_typesQuery = useQuery({
    queryKey: ["service_types"],
    queryFn: async () => getService_types(supabase),
  });

  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-12 mb-4 text-center">
            <h1>Service Types</h1>
        </div>
      </div>
      {service_typesQuery.isLoading && <div>Loading...</div>}
      <div className="row">
        {service_typesQuery.data?.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <SupaImage
                bucket="pictures"
                fileName={service.picture}
                className="card-img-top"
                alt={service.name}
                style={{ width: "100px", objectFit: "cover" }}
              />
              <div className="card-body text-center mb-3">
                <h5 className="card-title">{service.name}</h5>

                <Link href={"/service_types/" + service.id}>
                  <div className="btn btn-primary">Providers</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
