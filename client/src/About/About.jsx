import "./About.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function About() {
  const now = new Date();
  const nextMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1
  ).getMonth();
  const monthName = MONTHS[nextMonth];

  return (
    <>
      <div className="about-me-blurb primary-content text-content">
        <div>
          Hey! My name is Isabel, and I've been working as a fullstack software
          engineer for the past ~ five years now. I've loved getting to build
          products from scratch with some wonderful teams over the past few
          years.
        </div>
        <div>
          I am from the chicago area originally (Evanston) and love a lot of
          things outside of work, though they seem to change from month to
          month. Right now I'm very into yoga, Chappel Roan and Neil Gaimen but
          that could change by {monthName} :)
        </div>
      </div>
    </>
  );
}
