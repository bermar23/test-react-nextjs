import Link from "@/components/Link"

export default function Product({ params: { id } }){
  return <div className="p-5 bg-slate-500">
    <h1>this is product page of id {id}</h1>
    <Link href="/products">Products</Link> 
  </div>
}