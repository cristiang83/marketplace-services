import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { PersonSchema } from "@/services/schema";
import { updatePerson } from "@/services/createPerson";
import { PersonForm } from "@/componentes/PersonForm";
import {
  getService_types,
  getPerson,
  getProviderByUser,
} from "@/services/getProvider";
import { useEffect } from "react";
import { securePage } from "@/services/securePage";

export default securePage(function EditPerson() {
  const router = useRouter();
  const returnTo = router.query.return_to;

  const user = useUser();
  const supabase = useSupabaseClient();

  const service_typesQuery = useQuery({
    queryKey: ["service_types"],
    queryFn: () => getService_types(supabase),
  });

  const personQuery = useQuery({
    queryKey: ["person", user.id],
    queryFn: () => getProviderByUser(supabase, user.id),
  });

  useEffect(() => {
    console.log(personQuery.data);
  }, [personQuery.data]);

  const form = useForm({
    defaultValues: {
      name: "",
      dob: new Date(),
      email: "",
      address: "",
      phone: "",
      description: "",
    },
    resolver: zodResolver(PersonSchema),
  });

  useEffect(() => {
    if (personQuery.data) {
      form.reset(personQuery.data);
    }
  }, [personQuery.data, form]);

  const providerQuery = useMutation({
    mutationFn: (data) =>
      updatePerson(
        supabase,
        user.id,
        { ...data, user_id: user.id },
        !personQuery.data
      ),
  });

  const handleSaveData = async (data) => {
    providerQuery.mutate(data, {
      onSuccess: (record) => {
        if (returnTo) {
          router.push(returnTo);
        } else {
          router.push("/service_types");
        }
      },
      onError: (e) => {
        alert(e.message);
      },
    });
  };

  return (
    <div className="container">
      <h2>Edit person</h2>

      <PersonForm
        form={form}
        onSaveData={handleSaveData}
        service_types={service_typesQuery.data}
        isPending={providerQuery.isPending}
        submitLabel="Update person"
      />
    </div>
  );
});
