import {getPaste} from "@/app/lib/store";

export default async function PastePage({ params }) {
  const {id}= await params;
  const paste = await getPaste(id);

  if (!paste) {
    return <h2>❌ Paste not found</h2>;
  }

  if(paste.status === "EXPIRED"){
    return <h2>Paste expired</h2>
  }

  return (
    <div>
      <h2>Paste Content</h2>
      <pre>{paste.content}</pre>
    </div>
  );
}