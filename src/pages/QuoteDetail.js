import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>Qoute Detail</p>
      <p>{params.quoteId}</p>
    </div>
  );
};

export default QuoteDetail;
