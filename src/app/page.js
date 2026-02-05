import Link from "next/link";
import RealtimeCounter from "../app/ui/RealtimeCounter";
import prisma from "./lib/prisma";
export default function Home() {
  async function getTotalVisit() {
    const visit = await prisma.sitevisit.findUnique({
      where: { id: 1 },
    });
    return visit.count;
  }
  return (
    <div className="homepage">
      <div className="header">
        <video
          className="header__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://dipak-portfolio-asset.s3.ap-southeast-2.amazonaws.com/portfolio.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="header__content">
          <h2>SOFTWARE DEVELOPER</h2>
          <h3>
            WEBSITES, MOBILE APPLICATIONS, BUSINESS ANALYST, SOLUTION ARCHITECT
          </h3>
          <Link href="/contact">
            <button className="header__btn">CONTACT NOW</button>
          </Link>
        </div>
      </div>
      <div className="second__div">
        <h1 className="second__header">
          MY ONLY AMBITION IS BUILDING BUSINESSES
        </h1>
        <p className="black"> WEBSITE & MOBILE APPS</p>
        <RealtimeCounter totalvisit={getTotalVisit()} />
      </div>
    </div>
  );
}
