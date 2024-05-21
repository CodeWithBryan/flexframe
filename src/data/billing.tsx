import * as Icons from '../components/common/Icons';

export const InvoiceTable = {
  header: [
    {
      name: 'Plan Name',
      isFilterIcon: false,
    },
    {
      name: 'Date & Time',
      isFilterIcon: true,
    },
    {
      name: 'Expire Date',
      isFilterIcon: true,
    },
    {
      name: 'Amount',
      isFilterIcon: true,
    },
    {
      name: 'Method',
      isFilterIcon: true,
    },
    {
      name: 'Status',
      isFilterIcon: true,
    },
  ],
  rowsData: [
    {
      planeName: {
        img: '/assets/subscription.svg',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'active',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/subscription.svg',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'active',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/subscription.svg',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'active',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
  ],
};

export const UpgradePlaneData = [
  {
    type: 'Standard',
    img: '/assets/plan1.png',
    price: '$35',
    btnText: 'Downgrade',
    btnStyles: 'text-[#525866] bg-white-1  border-[1px] border-[#E2E4E9]',
    attributes: [
      '24/7 access',
      'No contract - full enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      'Group fitness classes',
    ],
  },
  {
    type: 'Standard',
    img: '/assets/plan1.png',
    price: '$35',
    btnText: 'Current plan',
    btnStyles: 'text-[#525866] bg-[#9494941A]',
    attributes: [
      '24/7 access',
      'No contract - full enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      'Group fitness classes',
    ],
  },
  {
    type: 'Standard',
    img: '/assets/plan1.png',
    price: '$35',
    btnText: 'Upgrade',
    btnStyles: 'text-white-1 bg-red-1',
    attributes: [
      '24/7 access',
      'No contract - full enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      'Group fitness classes',
    ],
  },
];

export const CancelSubscriptionData = [
  'No contract',
  'Cardio & strength equipment',
  '1:1 fitness assessment',
  'Personal training',
  'Group fitness classes',
];

export const CancelSubReasonData = [
  'Too expansive',
  'Not what i expected',
  'Inconsistent equipment maintenance',
  'Lack of cleanliness',
  'Limited class cariety',
  'Unresponsive staff',
  'Inconvenient hours',
  'Crowded dacilities',
  'Ineffective training programs',
  'Lack of personalized attention',
];
