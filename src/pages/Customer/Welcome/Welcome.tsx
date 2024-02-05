import React, { useState, ChangeEvent } from 'react';
import Typography from '../../../components/shared/Typography/Typography';
import { DateInput } from '@mantine/dates';
import logo from '../../../assets/logo.png';
import * as Icons from '../../../svg/Icons';
import classes from './Welcome.module.css';
import SingleSelect from '../../../components/shared/Select/SingleSelect';
import Input from '../../../components/shared/Inputs/Input';
import FillButton from '../../../components/shared/Buttons/FillButton';

const Welcome: React.FC = () => {
  // states ---->
  const [formData, setFormData] = useState({
    birthDate: null,
    gender: '',
    goal: '',
    country: '',
    state: '',
    city: '',
    address: '',
  });

  // function --->

  const handleInputChange = (
    fieldName: string,
    value: string | Date | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className='w-full relative h-screen bg-white-1 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
      {/* left portion ------->  */}
      <div className='w-full py-10 flex justify-center items-center'>
        <div className='w-full max-w-[540px] flex flex-col gap-3 px-4 sm:px-8 h-full justify-center items-center'>
          <Typography.lgText styles='text-black-1 font-bold'>
            Welcome to RP Fitness
          </Typography.lgText>
          <Typography.mText styles='text-center font-normal text-[#525866]'>
            Answer few questions to help us improve your fitness experience.
          </Typography.mText>

          <Typography.smallText styles='text-black-3 sm:text-left text-center font-normal'>
            Didn’t receive a code? Send a new code in{' '}
            <span className='text-red-1 font-semibold'> 00:29 </span>
          </Typography.smallText>
          {/* inputs --------->  */}
          <div className='w-full flex flex-col gap-3 sm:gap-4 mt-3 sm:mt-4'>
            {/* date of birth ------->  */}
            <div className='w-full flex flex-col gap-1'>
              <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                Date of birth
              </p>
              <DateInput
                classNames={classes}
                value={formData.birthDate}
                name='dateBirth'
                onChange={(value) => handleInputChange('birthDate', value)}
                valueFormat='DD/MM/YYYY'
                placeholder='DD / MM / YYYY'
              />
            </div>
            {/* select gender --->  */}
            <div className='w-full flex flex-col gap-1'>
              <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                Gender
              </p>
              <SingleSelect
                name='gender'
                value={formData.gender}
                setValue={(value: string) => handleInputChange('gender', value)}
                placeholder='Male'
                options={['Male', 'Female']}
              />
            </div>
            {/* whats your goal --->  */}
            <div className='w-full flex flex-col gap-1'>
              <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                What is your goal?
              </p>
              <SingleSelect
                name='goal'
                value={formData.goal}
                setValue={(value: string) => handleInputChange('goal', value)}
                placeholder='Lose Weight'
                options={['Lose Weight', 'Cuts', 'Body']}
              />
            </div>
            {/* Country --->  */}
            <div className='w-full flex flex-col gap-1'>
              <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                Country
              </p>
              <SingleSelect
                placeholder='United States'
                name='country'
                value={formData.country}
                setValue={(value: string) =>
                  handleInputChange('country', value)
                }
                options={['United States', 'Canada', 'Dubai', 'Qater']}
              />
            </div>
            {/* state + city select box ----> */}
            <div className='w-full grid grid-cols-2 gap-5'>
              {/* state */}
              <div className='w-full flex flex-col gap-1'>
                <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                  State
                </p>
                <SingleSelect
                  placeholder='New York'
                  name='state'
                  value={formData.state}
                  setValue={(value: string) =>
                    handleInputChange('state', value)
                  }
                  options={[
                    'Texas',
                    'California',
                    'New York',
                    'Florida',
                    'Illinois',
                  ]}
                />
              </div>
              {/* city */}
              <div className='w-full flex flex-col gap-1'>
                <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                  City
                </p>
                <SingleSelect
                  placeholder='New York'
                  name='city'
                  setValue={(value: string) => handleInputChange('city', value)}
                  value={formData.city}
                  options={[
                    'Texas',
                    'California',
                    'New York',
                    'Florida',
                    'Illinois',
                  ]}
                />
              </div>
            </div>
            {/* your address ----> */}
            <div className='w-full flex flex-col gap-1'>
              <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                Address
              </p>
              <Input
                type='text'
                name='address'
                placeholder='Enter address'
                onChange={(e: any) =>
                  handleInputChange('address', e.target.value)
                }
                value={formData.address}
              />
            </div>
            {/* fill button  */}
            <div className='w-full py-3'>
              <FillButton styles='w-full h-[50px] text-white-1 bg-red-1 rounded-[60px]'>
                Get started with RP fitness
              </FillButton>
            </div>
          </div>
        </div>
      </div>
      {/* right portion ------->  */}
      <div className='w-full hidden lg:flex flex-col gap-3 h-full bg-black-3 p-11'>
        <img src={logo} className='w-[44px] h-[38px] object-fill' />
        <Typography.h2 styles='text-white-1 font-bold py-4'>
          Thanks for becoming a RP Fitness Pro member
        </Typography.h2>
        <Typography.lgText styles='text-white-1 font-semibold'>
          What’s included in your membership?
        </Typography.lgText>
        {/* service attributes ----->  */}
        <div className='w-full gap-4 grid grid-cols-2 mt-6'>
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className='w-full flex gap-2 justify-start items-center'
              >
                <Icons.check2 className='w-[20px] h-[20px]' />
                <Typography.text styles='text-white-1 font-normal'>
                  {item}
                </Typography.text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const services = [
  ' 24/7 access',
  'No contract - 50% off',
  'Enrollment fee',
  '1:1 fitness assessment',
  'Cardio & strength equipment',
  '10% off on all supplements',
  'Group fitness classes',
  'Discounted guest pass',
];

export default Welcome;
