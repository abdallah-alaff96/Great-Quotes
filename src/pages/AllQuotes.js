import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTE = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Abdallah",
    text: "Learning React is Great!",
  },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTE} />
    </div>
  );
};

export default AllQuotes;
