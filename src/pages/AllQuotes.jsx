import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Gus",
    text: "React is fun!",
  },
  {
    id: "q2",
    author: "Gustavo",
    text: "React is great!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
