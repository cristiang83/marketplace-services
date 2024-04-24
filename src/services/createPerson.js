export async function createPerson(supabase, perosnData) {
  const { data, error } = await supabase.from("provider").insert([perosnData]) .select();
  return data;
}
export async function updatePerson(supabase, id, personData) {
  const { data, error } = await supabase
    .from("provider")
    .update(personData)
    .eq("id", id)
    .select();
  return data;
}