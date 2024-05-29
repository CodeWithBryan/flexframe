import ComponentWrapper from "../../common/ComponentWrapper";
import * as Icons from "../../common/Icons";
import { Link } from "react-router-dom";
import Typography from "../../common/Typography";

const SocialBanner = () => {
  return (
    <div className="w-full lg:flex hidden h-[50px] bg-[#1b1b1b] border-b-[1px] border-white-1/10">
      <ComponentWrapper style="h-full">
        <div className="w-full h-full flex justify-between items-center">
          {/* left por ==>  */}
          <div className="flex justify-center items-center gap-4">
            {socialBannerData.addresses.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center gap-1"
                >
                  {item.icon}
                  <a href={item.link}>
                    <Typography.smallText styles="text-white-1/80">
                      {item.text}
                    </Typography.smallText>
                  </a>
                </div>
              );
            })}
          </div>
          {/* right por ==>  */}
          <div className="flex justify-center items-center gap-3">
            {socialBannerData.social.map((item, index) => {
              return (
                <Link
                  className="hover:scale-110 duration-300"
                  to={item.link}
                  key={index}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

const socialBannerData = {
  addresses: [
    {
      icon: <Icons.Search />,
      text: "info@rnpfitness.com",
      link: "mailto:info@rnpfitness.com",
    },
    {
      icon: <Icons.call />,
      text: "+1 (407)-920-9863",
      link: 'tel:+14079209863',
    },
    {
      icon: <Icons.location />,
      text: "885 S Charles Richard Beall Blvd. DeBary, FL 32713, USA",
      link: 'https://maps.app.goo.gl/RtnD5jLqwxaArJAD8'
    },
  ],
  social: [
    {
      icon: <Icons.faceBook />,
      link: "https://www.facebook.com/rnpfitnessgymm/",
    },
    {
      icon: <Icons.instagram />,
      link: "https://www.instagram.com/ifbbproryanpateracki/",
    },
  ],
};

export default SocialBanner;
