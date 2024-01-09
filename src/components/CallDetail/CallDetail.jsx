import PropTypes from "prop-types";

const CallDetail = (props) => {
  const { data } = props;

  //   const dateSplit = data.created_at;
  //   const [dataDate, dataTime] = dateSplit.split("T");
  //   const [formattedDataTime] = dataTime.split(".");
  return (
    <div className="flex justify-evenly items-center flex-wrap px-4 py-2 w-full">
      <div className="call-summary">
        Duration: <span className="call-detail">{data.duration} </span>sec
      </div>
      <div className="call-summary">
        Via: <span className="call-detail">{data.via}</span>
      </div>

      <div className="call-summary">
        <span className="call-detail">{data.direction}</span>
      </div>
      {/* <div className="call-summary">
        Time: <span className="call-detail">{formattedDataTime}</span>
      </div>
      <div className="call-summary">
        Date: <span className="call-detail">{dataDate}</span>
      </div>
      <div className="call-summary">
        type:
        <span className="call-detail"> {data.call_type}</span>
      </div> */}
    </div>
  );
};

CallDetail.propTypes = {
  data: PropTypes.object,
};

export default CallDetail;
