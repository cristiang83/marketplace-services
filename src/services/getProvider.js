export async function getProvider(supabase, sid) {
  let { data: provider, error } = await supabase
    .from("provider")
    .select("*, service_types(*)")
    .eq("service_types_id", sid);
  return provider;
}

export async function getService_types(supabase) {
  let { data: service_types, error } = await supabase
    .from("service_types")
    .select("*");
  return service_types;
}
export async function getPerson(supabase, id) {
  let { data: person, error } = await supabase
    .from("provider")
    .select("*, service_types(*)")
    .eq("id", id)
    .single();
  return person;
}

export async function getProviderByUser(supabase, userId) {
  let { data: person, error } = await supabase
    .from("provider")
    .select("*, service_types(*)")
    .eq("user_id", userId)
    .single();
  return person;
}
