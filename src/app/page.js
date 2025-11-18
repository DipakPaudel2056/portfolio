import prisma from "./lib/prisma";

export default function Home() {
  async function counter() {
    "use server";
    let total_visit = 0;
    await prisma.sitevisit.update({
      where: {
        id: 1,
      },
      data: {
        count: { increment: 1 },
      },
    });
    total_visit = await prisma.sitevisit.findUnique({
      where: {
        id: 1,
      },
    });
    return total_visit.count;
  }
  return (
    <div className="homepage">
      <div className="header">
        <video className="header__video" autoPlay loop muted>
          <source src="/dipakdummy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="header__content">
          <h2>SOFTWARE DEVELOPER</h2>
          <h3>
            WEBSITES, MOBILE APPLICATIONS, BUSINESS ANALYST, SOLUTION ARCHITECT
          </h3>
          <button className="header__btn">CONTACT NOW</button>
        </div>
      </div>
      <div className="second__div">
        <h1 className="second__header">
          MY ONLY AMBITION IS BUILDING BUSINESSES
        </h1>
        <p className="black"> WEBSITE & MOBILE APPS</p>
        <p>total site visit: {counter()}</p>
      </div>
    </div>
  );
}
