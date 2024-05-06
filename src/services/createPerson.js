export async function getProvider(supabase) {
  let { data: provider, error } = await supabase
    .from("provider")
    .select("*, service_types_id");
  return provider;
}

export async function createPerson(supabase, perosnData) {
  const { data, error } = await supabase
    .from("provider")
    .insert([perosnData])
    .select();
  return data[0];
}
export async function updatePerson(supabase, id, personData, isCreate) {
  if (isCreate) {
    const { data, error } = await supabase
      .from("provider")
      .insert([personData])
      .select();
    return data[0];
  }

  const { data, error } = await supabase
    .from("provider")
    .update(personData)
    .eq("user_id", id)
    .select();
  return data;
}
