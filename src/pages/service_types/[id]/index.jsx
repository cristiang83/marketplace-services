import { useRouter } from "next/router";
import { SupaImage } from "@/componentes/SupaImage";
import { getProvider } from "@/services/getProvider";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

export default function ServiceTypeProvidersPage() {
  const router = useRouter();
  const id = router.query.id;
  const supabase = useSupabaseClient();
  const providerQuery = useQuery({
    queryKey: ["provider"],
    queryFn: async () => getProvider(supabase, id),
  });
  return (
    <div>
      <h1>Provider</h1>
      <a href="/provider/create" className="btn btn-success">
        Add Provider
      </a>

      {providerQuery.isLoading && <div>Loading...</div>}
      <table className="table">
        <tbody>
          {providerQuery.data?.map((person) => (
            <tr key={person.id}>
              <td>
                <SupaImage bucket="pictures" fileName={person.picture} />
              </td>
              <td>
                <a href={`/provider/${person.id}`}>{person.name}</a>
              </td>
              <td>{person.dob}</td>
              <td>{person.description}</td>
              <td>{person.address}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.service_types_id?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
