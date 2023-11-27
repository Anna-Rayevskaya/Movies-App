import { Input } from 'antd'

import TabsHeader from '../tabs'

function HeaderSearch() {
  const { Search } = Input
  return (
    <div>
      <TabsHeader />
      <Search
        placeholder="Type to search..."
        style={{
          width: 940,
        }}
      />
    </div>
  )
}

export default HeaderSearch
