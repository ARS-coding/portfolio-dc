import { ClientOnly } from './client'
import "../../main.css"

export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <ClientOnly /> // We'll update this
}