import { SupaImage } from "@/componentes/SupaImage";
import { getProvider } from "@/services/getProvider";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ProviderPage() {
  const supabase = useSupabaseClient();

  const providerQuery = useQuery({
    queryKey: ["provider"],
    queryFn: () => getProvider(supabase),
    refetchInterval: 1000,
  });

  return (
    <div>
      <h1>Provider</h1>
      <a href="/provider/create" className="btn btn-success">
        Add Person
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
                <Link href={`/provider/${person.id}`}>{person.name}</Link>
              </td>
              <td>{person.dob}</td>
              <td>{person.address}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.service_types?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {providerQuery.isError && <div>Error fetching data</div>}
    </div>
  );
}