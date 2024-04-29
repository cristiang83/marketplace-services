import { SupaImage } from "@/componentes/SupaImage";
import { getService_types } from "@/services/getService_types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ServiceTypesPage() {
  const supabase = useSupabaseClient();
  const service_typesQuery = useQuery({
    queryKey: ["service_types"],
    queryFn: async () => getService_types(supabase),
  });

  return (
    <div className="container">
      <h1>Service Types</h1>

      {service_typesQuery.isLoading && <div>Loading...</div>}
      <div className="row">
        {service_typesQuery.data?.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <SupaImage
                width="100%"
                bucket="pictures"
                fileName={service.picture}
                className="card-img-top,"
                alt={service.name}
                style={{ width: "500px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
              
                <Link href={"/service_types/" + service.id}>
                  <div className="btn btn-primary">Go somewhere</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}