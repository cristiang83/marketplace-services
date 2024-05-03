import { getImageUrl } from "@/services/images";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export function SupaImage({ bucket, fileName, className, borderRadius}) {
  const supabase = useSupabaseClient();
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    getImageUrl(supabase, bucket, fileName).then(setImageURL);
  }, [supabase, bucket, fileName]);

  if (!imageURL) {
    return null;
  }
  return <img src={imageURL} width="100%" className={className} borderRadius={borderRadius}/>;
}
