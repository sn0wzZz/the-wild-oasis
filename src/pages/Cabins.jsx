import Heading from '../ui/Heading'
import CabinTableOperations from '../features/cabins/CabinTableOperations'
import Row from '../ui/Row'
import CabinTable from '../features/cabins/CabinTable'
import AddCabin from '../features/cabins/AddCabin'

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin/>
      </Row>
    </>
  )
}

export default Cabins
