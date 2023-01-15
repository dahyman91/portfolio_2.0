import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Dan
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Fullstack Software Developer & Cloud Engineer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I’ve been curious about the world of software development since college,
        but my time-intensive jobs as a Chef and Catering Director made a career
        pivot seem unrealistic. When the pandemic hit and the office buildings
        that my catering program serviced vacated, I took the opportunity to
        dive into a new field. Since March 2020, I have diligently taught myself
        the latest web development technologies and had opportunities to work
        with all kinds of clients. I’ve gained a range of skills, from ideation
        to deployment and everything in between. In January 2022, I graduated
        from the software engineering program at the immersive coding bootcamp
        Flatiron School, and I’m looking forward to joining a team of inspiring,
        like-minded engineers.
      </p>
    </div>
  );
}

export default Intro;
