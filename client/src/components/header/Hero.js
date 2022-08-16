import React from "react";
import Background from "../../images/charity.jpg";
const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div
          class="hero min-h-screen "
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div class="hero-overlay bg-opacity-60"></div>

          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div class="text-center max-w-lg w-full">
              <h1 class="title-font  text-6xl mb-5 font-bold text-accent">
                I grow by helping people in need.{" "}
              </h1>
              <p class="mb-5 leading-relaxed text-gray-400">
                THE SMALLEST ACT OF KINDNESS IS WORTH MORE THAN GRANDEST INTENSIONS.
              </p>
            </div>
              <div class="flex justify-center animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
