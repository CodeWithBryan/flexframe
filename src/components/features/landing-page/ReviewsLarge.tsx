import React, { useEffect, useState } from "react";
import Typography from "../../common/Typography";
import * as Icons from "../../common/Icons";
import { fetchReviewCount } from "../../../api/reviews";

export const fetchPlaceDetails = async () => {
  try {
    const response = await fetchReviewCount();
    return response.data;
  } catch (error) {
    console.error("Error fetching place details:", error);
    return {
      rating: 0,
      userRatingsTotal: 0,
    };
  }
};

const ReviewsLargeComponent = () => {
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
    <div className="flex max-w-[400px] flex-col items-center md:items-start gap-3">
      <a href="https://search.app.goo.gl/tQt5t87">
        <Typography.h3 styles="text-white-1 font-bold md:text-left text-center">
          Reviews
        </Typography.h3>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center gap-3">
            <div className=" flex justify-center items-center gap-1">
              {[...Array(rating)].map((index) => (
                <Icons.star className="w-[32px] h-[32px]" key={index} />
              ))}
            </div>
            <Typography.lgText styles="text-white-1 font-bold">
              {rating}
            </Typography.lgText>
          </div>
          <Typography.smallText styles="text-white-1 font-normal md:text-left text-center">
            ({userRatingsTotal} reviews)
          </Typography.smallText>
        </div>
      </a>
    </div>
  );
};

export default ReviewsLargeComponent;
