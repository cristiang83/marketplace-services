import { useRouter } from "next/router";


export default function ProviderPage () {
    const router = useRouter();
    const id = router.query.id;
    return <div>This a person page for person ID: {id}</div>;
}