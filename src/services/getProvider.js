export async function getProvider(supabase) {
    let { data: provider, error } = await supabase
      .from("provider")
      .select("*, service_types_id");
    return provider;
  }