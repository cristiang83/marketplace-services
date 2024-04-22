import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { getImageUrl } from "@/services/images";

export function SupaImage({ bucket, fileName }) {
  const supabase = useSupabaseClient();
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    getImageURL(supabase, bucket, fileName).then(setImageURL);
  }, [supabase, bucket, fileName]);

  if (!imageURL) {
    return null;
  }
  return <img src={imageURL} width={100} />;
}