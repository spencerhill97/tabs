import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
  const { company, date, duties, title } = jobs[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{date}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
