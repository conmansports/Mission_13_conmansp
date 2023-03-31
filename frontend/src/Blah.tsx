function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="companylogo"></img>
        </div>
        <div className="col align-self-center text-start">
          <h1>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
