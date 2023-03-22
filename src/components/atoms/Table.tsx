import { type ReactNode, type ReactElement, memo } from 'react'

interface TableProps {
  children: ReactNode
}

const Table = memo(function _({ children }: TableProps): ReactElement {
  return (
    <table className='table-zebra table w-full'>
      <thead>
        <tr>
          <th className='w-4 bg-base-300'></th>
          <th className='bg-base-300'></th>
          <th className='sticky right-0 w-4 bg-base-300'></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
})

export default Table
