import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="aboutImg"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Demos, where fashion meets quality! At Demos, we’re
            passionate about curating the latest trends and timeless pieces,
            providing a one-stop shop for style-conscious individuals who value
            both comfort and quality.
          </p>
          <p>
            Each item in our collection reflects our commitment to excellence
            and craftsmanship. From handpicked fabrics to modern silhouettes,
            Demos combines style, durability, and elegance. Whether you’re
            looking for seasonal must-haves or classic essentials, you’ll find
            what you need to express your unique style. Explore our collections
            today and experience fashion redefined with Demos!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Demos, our mission is to empower individuals through fashion that
            reflects authenticity, confidence, and quality. We believe that
            clothing should not only look good but also feel great, enhancing
            your daily experiences and expressing your unique style.
          </p>
        </div>
      </div>

      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20">
          <b className="">Quality Assurance</b>
          <p className="text-gray-600">
            Choose Demos for unmatched quality assurance—each piece is crafted
            with precision, ensuring durability, comfort, and style in every
            wear.
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20">
          <b className="">Convenience</b>
          <p className="text-gray-600">
            Experience shopping convenience with Demos—easy navigation, quick
            checkout, and seamless delivery bring the latest styles right to
            your doorstep.
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20">
          <b className="">Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Demos, we prioritize you! Our dedicated support team ensures a
            smooth shopping experience with prompt, friendly assistance every
            step of the way.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
