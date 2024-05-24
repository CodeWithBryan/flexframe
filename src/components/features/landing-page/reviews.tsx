import { useEffect, useState } from 'react';
import Typography from '../../common/Typography';
import * as Icons from '../../common/Icons';
import  { fetchReviewCount } from '../../../api/reviews';

export const fetchPlaceDetails = async () => {
  try {
    const response = await fetchReviewCount();
    return response.data;
  } catch (error) {
    console.error('Error fetching place details:', error);
    return {
      rating: 0,
      userRatingsTotal: 0,
    };
  }
};


const ReviewsComponent = () => {
  const [rating, setRating] = useState(0);
  const [userRatingsTotal, setUserRatingsTotal] = useState(0);

  useEffect(() => {
    const getPlaceDetails = async () => {
      const { rating, userRatingsTotal } = await fetchPlaceDetails();
      setRating(rating);
      setUserRatingsTotal(userRatingsTotal);
    };

    getPlaceDetails();
  }, []);

  return (
    <div className='hidden md:flex flex-col gap-2 sm:gap-4 mt-2 sm:mt-4'>
      <Typography.mText styles='text-white-1 font-medium'>
        Trusted by 300+ customers
      </Typography.mText>
      <div className='flex justify-center items-center gap-1'>
        {[...Array(rating)].map((index) => (
          <Icons.star key={index} />
        ))}
        <Typography.mText styles='text-white-1 font-medium ml-2'>
          {rating}
        </Typography.mText>
        <Typography.mText styles='text-white-1 font-normal'>
          <a href="https://search.app.goo.gl/tQt5t87">({userRatingsTotal} reviews)</a>
        </Typography.mText>
      </div>
    </div>
  );
};

export default ReviewsComponent;