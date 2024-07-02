import { api } from "@/lib/axios"
import { IStock, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<IStock[]> {
  const response = await api.get('stocks')
  return response.data
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
