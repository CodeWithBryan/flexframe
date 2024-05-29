import React, { useState, useEffect } from 'react';
import * as Icons from '../../../../src/components/common/Icons';
import { IoSettingsOutline } from 'react-icons/io5';
import SingleSelect from '../../../components/common/SingleSelect';
import { DonutChart } from '@mantine/charts';
import { AreaChart } from '@mantine/charts';
import { BarChart } from '@mantine/charts';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Input } from '@mantine/core';
import OutlineButton from '../../../components/common/Buttons/OutlineButton';
import Typography from '../../../components/common/Typography';
import { LuSearch } from 'react-icons/lu';
import TableHeader from '../../../components/features/customer/billing/TableHeader';
import TableRow from '../../../components/features/customer/billing/TableRow';
import RowForSmallScreen from '../../../components/features/customer/billing/RowForSmallScreen';
import { InvoiceTable } from '../../../data/billing';
import { adminDashboardData } from '../../../data/adminDashboard';
import StatsWidget from '../../../components/common/StatsWidget';

const Dashboard: React.FC = () => {
  // USET-STATES ---------------------->
  const [donutSize, setDonutSize] = useState(230);
  const [areaChartHeight, setAreaChartHeight] = useState(300);
  const [barChartH, setBarChartH] = useState(360);

  // DYNAMICALLY SETTING THE CHARTS SIZE -------------------->
  useEffect(() => {
    const calculateHeight = () => {
      const screenWidth = window.innerWidth;
      let newDonutHeight;
      if (screenWidth < 480) {
        newDonutHeight = 210;
        setAreaChartHeight(200);
        setBarChartH(230);
      } else if (screenWidth < 768) {
        newDonutHeight = 250;
      } else if (screenWidth < 1200) {
        newDonutHeight = 200;
      } else {
        newDonutHeight = 230;
      }
      setDonutSize(newDonutHeight);
    };

    calculateHeight();

    window.addEventListener('resize', calculateHeight);

    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  // FOR TOTAL MEMBERS SCRIPT =================>
  const total = adminDashboardData.totalMembers.reduce(
    (acc, item) => acc + item.value,
    0
  );

  const quantityStyles = adminDashboardData.totalMembers.map((item) => ({
    flex: `${(item.value / total) * 100}`,
    backgroundColor: item.color,
  }));

  return (
    <div className='w-full bg-[#F9F9F9] p-4 flex flex-col'>
      {/* TOP SECTION --------> */}
      <div className='w-full flex justify-between items-center'>
        {/* left portion  */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-[24px] text-[#0A0D14] font-semibold'>
            Hi ! Rp Fitness 👋
          </h1>
          <p className='text-[14px] font-normal text-[#525866]'>
            Here is what’s happening in your RP Fitness account.
          </p>
        </div>
        {/* right portion  */}
        <div className='flex justify-center items-center gap-3'>
          <button className='flex justify-center border-[1px] hover:bg-white-3 border-[#E2E4E9] rounded-[60px] px-4 py-2 items-center gap-2'>
            <Icons.calender className='w-[18px] h-[19px]' />
            <p className='text-[#525866] text-[14px] font-semibold'>
              Month to date
            </p>
          </button>
          <button className='w-[38px] h-[38px] border-[1px] hover:bg-white-3 bg-white-1 rounded-full border-[#E2E4E9] flex justify-center items-center'>
            <IoSettingsOutline className='text-[20px] text-[#868C98]' />
          </button>
        </div>
      </div>
      {/* statistics widegts ---------> */}
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6'>
        {adminDashboardData.generalStatistics.map((item, index) => {
          return (
            <StatsWidget key={index} type={item.type} value={item.value} />
          );
        })}
      </div>
      {/* total sales graph -----------> */}
      <div className='w-full grid mt-4 grid-cols-1 md:grid-cols-[1.3fr,3fr] gap-4'>
        {/* DonutChart ---------> */}
        <div className='w-full flex justify-center items-center'>
          <div className='w-full max-w-[400px] donutChart h-full flex flex-col p-3 bg-white-1 border-[1px] border-[#E2E4E9] rounded-[16px]'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-[16px] font-semibold text-[#0A0D14]'>
                Total sales
              </p>
              <SingleSelect
                options={['all times', '1 months before']}
                placeholder='All time'
                inputSize='w-[90px] rounded-[60px] text-[12px]'
              />
            </div>
            <DonutChart
              classNames={{ label: 'font-medium' }}
              h={270}
              tooltipDataSource='segment'
              size={donutSize}
              startAngle={90}
              chartLabel='Total Sales: $12000'
              endAngle={460}
              valueFormatter={(value: number) => `$${value}`}
              paddingAngle={2}
              thickness={23}
              data={adminDashboardData.donutChartData}
            />
            <div className='w-full flex -mt-2 justify-center items-center'>
              <div className='flex max-w-[200px] w-full justify-between items-center gap-3'>
                {adminDashboardData.donutChartData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='flex flex-col justify-center items-center gap-1'
                    >
                      <div
                        className={`flex ${
                          index === 0 ? 'bg-red-1/10' : 'bg-purple-1/10'
                        } relative justify-center items-center w-[30px] h-[30px]  rounded-full`}
                      >
                        {item.icon}
                      </div>
                      <p className='text-[12px] font-normal text-[#0A0D14]'>
                        {item.name}
                      </p>
                      <h3 className='text-[16px] leading-[15px] font-semibold text-[#121111]'>
                        ${item.value}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* line chart ---------> */}
        <div className='w-full areaChart flex gap-5 flex-col bg-white-1 h-full border-[1px] border-[#E2E4E9] rounded-[16px] p-3'>
          <div className='w-full flex justify-between items-center'>
            <p className='text-[16px] font-semibold text-[#0A0D14]'>
              Total sales over time
            </p>
            <SingleSelect
              options={['all times', '1 months before']}
              placeholder='All time'
              inputSize='w-[90px] rounded-[60px] text-[12px]'
            />
          </div>
          <AreaChart
            h={areaChartHeight}
            data={adminDashboardData.totalSalesOverTime}
            dataKey='date'
            yAxisProps={{ domain: [0, 100] }}
            valueFormatter={(value: number) => `$${value}`}
            series={[{ name: 'sales', color: '#B61F24' }]}
          />
        </div>
      </div>
      {/* MORE GRAPHS ---------------> */}
      <div className='w-full grid mt-4 grid-cols-1 md:grid-cols-[3fr,1.3fr] gap-4'>
        {/* 1st col  */}
        <div className='w-full grid gap-4 grid-cols-1 csm:grid-cols-2'>
          {/* Revenue by Membership bar chart ----> */}
          <div className='w-full flex flex-col gap-5 bg-white-1 border-[1px] rounded-[16px] border-[#E2E4E9] p-3'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-[16px] font-semibold text-[#0A0D14]'>
                Revenue by Membership
              </p>
              <SingleSelect
                options={['all times', '1 months before']}
                placeholder='All types'
                inputSize='w-[90px] rounded-[60px] text-[12px]'
              />
            </div>
            <BarChart
              h={150}
              data={adminDashboardData.revenueByMembershipData}
              dataKey='name'
              type='stacked'
              tickLine='none'
              gridAxis='y'
              orientation='vertical'
              yAxisProps={{ width: 70 }}
              series={[
                { name: 'standard', color: '#B61F24' },
                { name: 'elite', color: '#6E3FF3' },
                { name: 'elitePlus', color: '#F2AE40' },
              ]}
            />
          </div>
          {/* Attendence bar chart ----->  */}
          <div className='w-full flex flex-col gap-5 bg-white-1 border-[1px] rounded-[16px] border-[#E2E4E9] p-3'>
            <p className='text-[16px] font-semibold text-[#0A0D14]'>
              Attendence
            </p>
            <BarChart
              h={150}
              data={adminDashboardData.attendenceBarChartData}
              dataKey='day'
              type='stacked'
              tickLine='none'
              yAxisProps={{ width: 70 }}
              series={[
                { name: 'Attendence', color: '#B61F24' },
                { name: 'Absent', color: '#B61F241A' },
              ]}
            />
          </div>
          {/* total members chart ----> */}
          <div className='w-full flex flex-col gap-3 col-span-1 csm:col-span-2 bg-white-1 border-[1px] rounded-[16px] border-[#E2E4E9] p-3'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-[16px] font-semibold text-[#0A0D14]'>
                Customer membership
              </p>
              <SingleSelect
                options={['all times', '1 months before']}
                placeholder='All types'
                inputSize='w-[90px] rounded-[60px] text-[12px]'
              />
            </div>
            <div className='w-full flex justify-center gap-1 sm:gap-2 mt-3 items-center h-[30px] sm:h-[35px]'>
              {adminDashboardData.totalMembers.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`h-full ${index === 0 && 'rounded-l-[10px]'} 
                    ${index === 3 && 'rounded-r-[10px]'} 
                    flex justify-center items-center text-[12px] font-semibold text-white-1`}
                    style={quantityStyles[index]}
                  >
                    {item.value}
                  </div>
                );
              })}
            </div>

            {/* legend --->  */}
            <div className='w-full flex flex-wrap justify-center items-center gap-3 sm:gap-6'>
              {adminDashboardData.totalMembers.map((mem, index) => {
                return (
                  <div
                    key={index}
                    className='flex justify-center items-center gap-2'
                  >
                    <div
                      style={{ background: mem.color }}
                      className='w-[9px] h-[9px] rounded-full'
                    ></div>
                    <p className='text-[12px] text-[#525866] font-medium'>
                      {mem.type}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* 2nd col => Overdue payments --------> */}
        <div className='w-full h-full bg-white-1 flex flex-col border-[1px] rounded-[16px] border-[#E2E4E9] p-3'>
          <div className='w-full flex justify-between items-center'>
            <p className='text-[16px] font-semibold text-[#0A0D14]'>
              Overdue payments
            </p>
            <button className='text-[14px] px-4 py-[6px] font-medium rounded-[60px] bg-transparent border-[1px] border-[#E2E4E9] hover:bg-white-3 text-[#525866]'>
              Details
            </button>
          </div>
          <div className='w-full h-[1px] bg-[#E2E4E9] my-4'></div>
          <h2 className='text-[24px] font-medium text-[#0A0D14]'>$125.00</h2>
          <p className='text-[12px] font-normal text-[#525866]'>
            2 members payment overdue.
          </p>
          <div className='w-full flex mt-6 flex-col gap-4'>
            {adminDashboardData.overduePayments.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full flex justify-between items-center'
                >
                  <div className='flex justify-center items-center gap-2'>
                    <Icons.profile className='w-[40px] h-[40px]' />
                    <div className='flex flex-col gap-1'>
                      <h2 className='text-[14px] font-medium text-[#0A0D14]'>
                        {item.name}
                      </h2>
                      <p className='text-[12px] font-normal text-[#525866]'>
                        {item.feeType}
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-center items-center gap-2'>
                    <div className='flex justify-center items-center flex-col'>
                      <p className='text-[14px] font-medium text-[#0A0D14]'>
                        {item.remainingPrice}
                      </p>
                      <p className='text-[12px] font-normal text-[#B61F24]'>
                        {item.date}
                      </p>
                    </div>
                    <MdKeyboardArrowRight className='text-[18px] cursor-pointer text-[#525866]' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* orders over time -----------> */}
        <div className='bg-white-1 gap-3 border-[1px] rounded-[16px] border-[#E2E4E9] p-3 flex flex-col'>
          <p className='text-[16px] font-semibold text-[#0A0D14]'>
            Orders over time
          </p>
          <div className='orderChart'>
            <BarChart
              classNames={{
                tooltip:
                  'bg-white-1 p-3 rounded-[20px] border-[1px] border-[#E2E4E9]',
              }}
              h={barChartH}
              data={adminDashboardData.attendenceData}
              withLegend
              type='stacked'
              legendProps={{ verticalAlign: 'top', height: 50 }}
              dataKey='month'
              series={[
                { name: 'Completed', color: '#FFB8BA' },
                { name: 'Cancelled', color: '#F9F9F9' },
              ]}
            />
          </div>
        </div>
      </div>
      {/* latest subscription -----------> */}
      <div className='w-full flex bg-transparent mt-4 csm:bg-white-1 flex-col border-[0px] csm:border-[1px] overflow-hidden csm:border-white-3 rounded-[10px]'>
        {/* top header --->  */}
        <div className='w-full flex csm:flex-row flex-col csm:gap-0 gap-3 justify-between px-3 lg:py-0 py-2 items-center min-h-[80px]'>
          <div className='flex flex-col'>
            <Typography.mText styles='text-black-1 font-bold'>
              Invoice history
            </Typography.mText>
            <Typography.smallText styles='text-[#525866] font-normal'>
              View and manage all your past invoices in one convenient location.
            </Typography.smallText>
          </div>
          <div className='csm:flex csm:w-fit w-full grid grid-cols-[3fr,1fr] justify-center items-center gap-3'>
            <Input
              classNames={{
                input:
                  'h-[40px] rounded-[64px] w-full csm:w-[200px] lg:w-[330px] border-[#E2E4E9] text-[14px] placeholder:text-[#868C98] font-normal',
              }}
              placeholder='Search...'
              leftSection={<LuSearch className='text-[20px]' />}
            />
            <OutlineButton styles='w-full csm:w-fit bg-white-1 text-[#525866]'>
              Export
            </OutlineButton>
          </div>
        </div>
        <div className='w-full csm:block hidden overflow-auto'>
          {/* table header --->  */}
          <TableHeader headers={InvoiceTable.header} />
          {/* table rows --->  */}
          <div
            className={`w-full flex flex-col ${
              InvoiceTable.rowsData.length < 9 ? 'h-fit' : 'h-fit '
            } `}
          >
            {InvoiceTable.rowsData.slice(0, 2).map((row, index) => {
              return (
                <TableRow
                  key={index}
                  planeName={row.planeName}
                  amount={row.amount}
                  method={row.method}
                  dateAndTime={row.dateAndTime}
                  expireDate={row.expireDate}
                  status={row.status}
                />
              );
            })}
          </div>
        </div>

        {/* table card for small screen ------>  */}
        <div className='w-full csm:hidden flex flex-col gap-4 mt-4'>
          {InvoiceTable.rowsData.map((row, index) => {
            return (
              <RowForSmallScreen
                key={index}
                planeName={row.planeName}
                method={row.method}
                startDate={row.dateAndTime}
                status={row.status}
                expireDate={row.expireDate}
                amount={row.amount}
              />
            );
          })}
        </div>

        {/* view detail button */}
        <div className='w-full mb-5 mt-3 px-4'>
          <button className='w-full hover:bg-black-1/5 active:translate-y-[2px] bg-white-1 rounded-full border-[1px] h-[45px] flex justify-center items-center border-[#E2E4E9]'>
            <p className='text-[14px] font-medium text-[#525866]'>View all</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
