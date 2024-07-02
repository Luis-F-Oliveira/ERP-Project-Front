import { api } from "@/lib/axios"
import { IEmployee, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<IEmployee[]> {
  const response = await api.get('employees')
  return response.data
}

export default async function Page() {
  const data = await getData()

  console.log(data)

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
