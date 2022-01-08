import QuoteForm from "../components/quotes/QuoteForm";

const NewQoute = () => {
  const addQouteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQouteHandler} />;
};

export default NewQoute;
