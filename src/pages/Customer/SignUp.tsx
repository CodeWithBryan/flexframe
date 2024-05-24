import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Typography from '../../components/common/Typography';
import * as Icons from '../../components/common/Icons';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/common/Inputs/Input';
import PasswordField from '../../components/common/Inputs/PasswordField';
import FillButton from '../../components/common/Buttons/FillButton';
import MobileNumInput from '../../components/common/Inputs/PhoneInput';
import CheckBoxInput from '../../components/common/Inputs/CheckBox';
import useAuthStore from '../../stores/auth.store';
import { register } from '../../api/auth';

const SignUp: React.FC = () => {
  // States ----->
  const [signUp, setSignUp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    termsAgree: false,
  });
  const [error, setError] = useState('');

  const storeLogin = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  // Functions ----->
  const setSignUpValue = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignUp((prevSignUp) => ({
      ...prevSignUp,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUp.termsAgree) {
      setError('You must agree to the terms and conditions');
      return;
    }
    try {
      const response = await register(signUp.email, signUp.password, signUp.phone, signUp.firstName, signUp.lastName);
      const token = response.data.access_token;
      const user = response.data.user;

      storeLogin(token, user);
      navigate('/member/welcome');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='w-full min-h-screen bg-white-1 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
      {/* Left portion ------->  */}
      <div className='w-full py-10 flex justify-center items-center'>
        <div className='w-full max-w-[420px] flex flex-col gap-3 px-4 sm:px-8 h-full justify-center items-center'>
          <img src={logo} className='w-[44px] h-[38px] object-fill' alt='Logo' />
          <Typography.lgText styles='text-black-1 font-bold'>
            Welcome to R&P Fitness
          </Typography.lgText>
          <Typography.mText styles='text-center font-normal text-[#525866]'>
            Login to unlock a world of fitness tailored just for you.
          </Typography.mText>

          {/* Inputs ----->  */}
          <form onSubmit={handleRegister} className='flex flex-col gap-3 mt-2 sm:mt-4 items-start w-full'>
            {/* First name ----->  */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>
                First name
              </p>
              <Input
                value={signUp.firstName}
                type='text'
                name='firstName'
                onChange={setSignUpValue}
                placeholder='Enter Your First Name'
              />
            </div>
            {/* Last name ----->  */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>
                Last name
              </p>
              <Input
                value={signUp.lastName}
                type='text'
                name='lastName'
                onChange={setSignUpValue}
                placeholder='Enter Your Last Name'
              />
            </div>
            {/* Email --> */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>Email</p>
              <Input
                value={signUp.email}
                type='text'
                name='email'
                onChange={setSignUpValue}
                placeholder='Enter Your Email'
              />
            </div>
            {/* Mobile number ---->  */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>
                Mobile number
              </p>
              <MobileNumInput
                phone={signUp.phone}
                setPhone={(newPhone: string) =>
                  setSignUp((prevState) => ({ ...prevState, phone: newPhone }))
                }
              />
            </div>
            {/* Password ---->  */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                Password
              </p>
              <PasswordField
                value={signUp.password}
                name='password'
                onChange={setSignUpValue}
              />
            </div>
            {/* Agreement checkbox ----->  */}
            <div className='w-full flex mt-2 justify-start items-center'>
              <CheckBoxInput
                value={signUp.termsAgree}
                onChange={() =>
                  setSignUp((prevState) => ({
                    ...prevState,
                    termsAgree: !prevState.termsAgree,
                  }))
                }
                label={
                  <p className='text-[14px] font-normal text-black-3 font-inter'>
                    I agree to the Privacy Policy,{' '}
                    <Link to='#' className='text-red-1 font-medium'>
                      Terms of Use{' '}
                    </Link>{' '}
                    and{' '}
                    <Link to='#' className='text-red-1 font-medium'>
                      {' '}
                      Terms of Service
                    </Link>
                  </p>
                }
              />
            </div>
            {/* Error message ---->  */}
            {error && (
              <Typography.smallText styles='text-red-500 font-normal'>
                {error}
              </Typography.smallText>
            )}
            {/* Button ---->  */}
            <div className='w-full py-3'>
              <FillButton
                styles='w-full h-[50px] text-white-1 bg-red-1 rounded-[60px]'
                type='submit'
              >
                Sign up
              </FillButton>
            </div>
          </form>
          {/* Sign Up ---->  */}
          <Typography.mText styles='font-medium text-[#525866]'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-red-1 hover:opacity-80 font-semibold'
            >
              Login
            </Link>
          </Typography.mText>
          {/* Language change + support ------>  */}
          <div className='w-full flex gap-4 justify-center items-center mt-4 sm:mt-10'>
            <button className='flex hover:opacity-80 justify-center items-center gap-1'>
              <Icons.language className='w-[20px] h-[21px]' />
              <Typography.smallText styles='text-black-3 font-normal'>
                English
              </Typography.smallText>
            </button>
            <button className='flex hover:opacity-80 justify-center items-center gap-1'>
              <Icons.support className='w-[18px] h-[16px]' />
              <Typography.smallText styles='text-black-3 font-normal'>
                Support
              </Typography.smallText>
            </button>
          </div>
        </div>
      </div>
      {/* Right portion ----->  */}
      <div className='w-full lg:block hidden h-full'>
        <img src='/assets/auth.png' className='w-full h-full object-cover' alt='Auth' />
      </div>
    </div>
  );
};

export default SignUp;
