import {
  HiBanknotes,
  HiBriefcase,
  HiCalendarDays,
  HiChartBar,
} from 'react-icons/hi2'
import Stat from './Stat'
import { formatCurrency } from '../../utils/helpers'

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinsCount,
}) {


  
  const numBookings = bookings?.length
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
  const checkins = confirmedStays?.length
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount)

  return (
    <>
      <Stat
        title='Bookings'
        color='blue'
        icon={<HiBriefcase />}
        value={numBookings}
      />
      <Stat
        title='Sales'
        color='green'
        icon={<HiBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title='Check ins'
        color='indigo'
        icon={<HiCalendarDays />}
        value={checkins}
      />
      <Stat
        title='Occupancy rate'
        color='yellow'
        icon={<HiChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  )
}
