function Home() {
  const fourChallengesCard = [
    {
      title: "completed",
      icon: "bi bi-trophy",
      count: 0,
      bgColor: "bg-success-subtle",
      txColor: "text-success",
    },
    {
      title: "in-progress",
      icon: "bi bi-life-preserver",
      count: 0,
      bgColor: "bg-primary-subtle",
      txColor: "text-primary",
    },
    {
      title: "pending",
      icon: "bi bi-calendar",
      count: 0,
      bgColor: "bg-warning-subtle",
      txColor: "text-warning",
    },
    {
      title: "total",
      icon: "bi bi-stars",
      count: 0,
      bgColor: "bg-danger-subtle",
      txColor: "text-danger",
    },
  ];

  return (
    <div className="d-flex  gap-4 container-fluid justify-content-center">
      {fourChallengesCard.map((challenge) => (
        <div
          className="card text-center d-flex justify-content-center align-items-center gap-2 home-page-cards mt-5"
          style={{ width: "12rem", height: "12rem", borderRadius: "20px" }}
        >
          <div
            className={`${challenge.bgColor}  ${challenge.txColor} rounded-5 d-flex align-items-center justify-content-center fs-2`}
            style={{ width: "60px", height: "60px" }}
          >
            <i className={`${challenge.icon}`}></i>
          </div>
          <div className="fs-1 fw-bold">{challenge.count}</div>
          <div className="fs-5">{challenge.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
