import * as Icons from '../../src/components/common/Icons';

export const adminDashboardData = {
  attendenceData: [
    { month: 'January', Completed: 1200 },
    { month: 'February', Completed: 1900 },
    { month: 'March', Completed: 400 },
    { month: 'April', Completed: 1000 },
    { month: 'May', Cancelled: 800 },
    { month: 'June', Cancelled: 750 },
    { month: 'March', Cancelled: 400 },
    { month: 'April', Completed: 1000 },
    { month: 'May', Cancelled: 800 },
    { month: 'June', Completed: 750 },
    { month: 'May', Completed: 800 },
    { month: 'March', Completed: 400 },
  ],
  generalStatistics: [
    {
      type: 'Total customers',
      value: '275',
    },
    {
      type: 'Active members',
      value: '100',
    },
    {
      type: 'Orders',
      value: '100',
    },
    {
      type: 'Total sale',
      value: '$12,000.00',
    },
  ],
  donutChartData: [
    {
      name: 'Members',
      value: 500,
      color: '#DF1C41',
      icon: <Icons.totalMembers className='w-[21px] h-[20px]' />,
    },
    {
      name: 'Products',
      value: 500,
      color: '#4D40CC',
      icon: <Icons.totalProducts className='w-[19px] h-[18px]' />,
    },
  ],
  totalSalesOverTime: [
    {
      date: 'Mar 22',
      sales: 50,
    },
    {
      date: 'Mar 23',
      sales: 60,
    },
    {
      date: 'Mar 24',
      sales: 40,
    },
    {
      date: 'Mar 25',
      sales: 30,
    },
    {
      date: 'Mar 15',
      sales: 30,
    },
    {
      date: 'Mar 26',
      sales: 50,
    },
    {
      date: 'Mar 27',
      sales: 45,
    },
    {
      date: 'Mar 27',
      sales: 20,
    },
    {
      date: 'Mar 28',
      sales: 20,
    },
    {
      date: 'Mar 29',
      sales: 10,
    },
  ],
  revenueByMembershipData: [
    { name: 'Standard', standard: 1200 },
    { name: 'Elite', elite: 1900 },
    { name: 'Elite+', elitePlus: 400 },
  ],
  attendenceBarChartData: [
    { day: 'M', Attendence: 1200, Absent: 900 },
    { day: 'T', Attendence: 1900, Absent: 1200 },
    { day: 'W', Attendence: 400, Absent: 1000 },
    { day: 'T', Attendence: 1000, Absent: 200 },
    { day: 'F', Attendence: 800, Absent: 1400 },
    { day: 'S', Attendence: 750, Absent: 600 },
    { day: 'S', Attendence: 750, Absent: 600 },
  ],

  overduePayments: [
    {
      profile: <Icons.profile className='w-[40px] h-[40px]' />,
      name: 'Brooklyn Simmons',
      feeType: 'Standard Membership Fee',
      remainingPrice: '$35.00',
      date: 'Sep 18',
    },
    {
      profile: <Icons.profile className='w-[40px] h-[40px]' />,
      name: 'Ronald Richards',
      feeType: 'Elite Membership Fee',
      remainingPrice: '$55.00',
      date: 'Sep 18',
    },
    {
      profile: <Icons.profile className='w-[40px] h-[40px]' />,
      name: 'Bessie Cooper',
      feeType: 'Standard Membership Fee',
      remainingPrice: '$35.00',
      date: 'Sep 18',
    },
  ],
  totalMembers: [
    { type: 'Active', value: 300, color: '#38C793' },
    { type: 'Expiring Soon', value: 200, color: '#F2AE40' },
    { type: 'Memberships On Hold', value: 150, color: '#F17B2C' },
    { type: 'Canceled', value: 79, color: '#DF1C41' },
  ],
};
