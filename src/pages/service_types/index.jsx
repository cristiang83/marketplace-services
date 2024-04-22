import { SupaImage } from "@/componentes/SupaImage";
import { getService_types } from "@/services/getService_types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

export default function ServiceTypesPage() {
  const supabase = useSupabaseClient();
  const service_typesQuery = useQuery({
    queryKey: ["service_types"],
    queryFn: async () => getService_types(supabase),
  });
  return (
    <div>
      <h1>Service Types</h1>

      {service_typesQuery.isLoading && <div>Loading...</div>}
      <table className="table">
        <tbody>
          {service_typesQuery.data?.map((service) => (
            <tr key={service.id}>
              <td>
                <SupaImage bucket="pictures" fileName={service.picture} />
              </td>
              <td>{service.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
