import { useRouter } from "next/router";

export default function PersonPage() {
    const router = useRouter();
    const id = router.query.id;

    return(
        <div>
            <h2>This a person page for Person ID: {id}</h2>
            <a href={`/provider/${id}/edit`} className="btn btn-info"></a>
        </div>
    )

}