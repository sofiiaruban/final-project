import { FC } from 'react'

interface TableHeaderProps {
  headers: string[]
}

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead>
      <tr className="flex items-center py-2 px-4 justify-between">
        {headers.map((header, index) => (
          <th key={index} className="font-bold">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
