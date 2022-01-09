import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQoute = () => {
  const history = useHistory();

  const addQouteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQouteHandler} />;
};

export default NewQoute;
