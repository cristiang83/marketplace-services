import { PersonSchema } from "@/services/schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPerson } from "@/services/createPerson";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getService_types } from "@/services/getProvider";
import { ImageInput } from "@/componentes/ImageInput";
import { PersonForm } from "@/componentes/PersonForm";

export default function CreatePersonPage() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const service_typesQuery = useQuery({
    queryKey: ["service_types"],
    queryFn: () => getService_types(supabase),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      dob: new Date(),
      email: "",
      address: "",
      phone: "",
    },
    resolver: zodResolver(PersonSchema),
  });

  const providerQuery = useMutation({
    mutationFn: (data) => createPerson(supabase, data),
  });

  const handleSaveData = async (data) => {
    providerQuery.mutate(data, {
      onSuccess: (record) => {
        console.log(record);
        router.push("/provider");
      },
      onError: (e) => {
        alert(e.message);
      },
    });
  };

  return (
    <div className="container">
      <h2>Create person</h2>
      <PersonForm
        form={form}
        onSaveData={handleSaveData}
        service_types={service_typesQuery.data}
        isPending={providerQuery.isPending}
        submitLabel="Add Person"
      />
    </div>
  );
}