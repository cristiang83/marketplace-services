import { useForm } from "react-hook-form";
import { PersonSchema } from "@/services/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { createPerson, createProvider } from "@/services/createPerson";

export default function CreatePersonPage() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      dob: new Date(),
      email: "",
      address: "",
      phone: "",
      picture: "",
      service_types_id: "",
    },
    resolver: zodResolver(PersonSchema),
  });

  const handleSaveData = async (data) => {
    const createdRecord = await createPerson(supabase, data);
    console.log(createdRecord);
    router.push("/provider");
  };

  const providerQuery = useMutation({
    mutationFn: (data) => createPerson(supabase, data),
  });

  return (
    <div className="container">
      <h2>Create Provider</h2>

      <form onSubmit={form.handleSubmit(handleSaveData)}>
        <label className="form-label">Name</label>
        <input
          type="text"
          {...form.register("name")}
          className="form-control"
        />
        {form.formState.errors.name && (
          <div className="text-danger">
            {form.formState.errors.name?.message}
          </div>
        )}

        <label className="form-label">DOB</label>
        <input
          type="date"
          {...form.register("dob", { valueAsDate: true })}
          className="form-control"
        />
        {form.formState.errors.dob && (
          <div className="text-danger">
            {form.formState.errors.dob?.message}
          </div>
        )}

        <label className="form-label">Email</label>
        <input
          type="text"
          {...form.register("email")}
          className="form-control"
        />
        {form.formState.errors.email && (
          <div className="text-danger">
            {form.formState.errors.email?.message}
          </div>
        )}

        <label className="form-label">Phone</label>
        <input
          type="text"
          {...form.register("phone")}
          className="form-control"
        />
        {form.formState.errors.phone && (
          <div className="text-danger">
            {form.formState.errors.phone?.message}
          </div>
        )}

        <label className="form-label">Address</label>
        <input
          type="text"
          {...form.register("address")}
          className="form-control"
        />
        {form.formState.errors.address && (
          <div className="text-danger">
            {form.formState.errors.address?.message}
          </div>
        )}

        <button type="submit" className="btn btn-success">
          Create Provider
        </button>
      </form>
    </div>
  );
}
