export async function getService_types(supabase) {
  let { data: service_types, error } = await supabase
    .from("service_types")
    .select("*");
  return service_types;
}

export async function getService_type(supabase, id) {
  let { data: service_type, error } = await supabase
    .from("service_types")
    .select("*")
    .eq("id", id)
    .single();
  return service_type;
}
