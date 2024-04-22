export async function getService_types(supabase) {
  let { data: service_types, error } = await supabase
    .from("service_types")
    .select("*");
  return service_types;
}

