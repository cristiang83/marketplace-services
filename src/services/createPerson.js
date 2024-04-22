export async function createPerson(supabase, perosnData) {
  const { data, error } = await supabase.from("provider").insert([perosnData]) .select();
  return data;
}
