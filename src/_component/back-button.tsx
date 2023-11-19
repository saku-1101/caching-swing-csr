import {
  useNavigate,
} from 'react-router-dom';

export default function BackButton() {
  const navigation = useNavigate();
  return (
    <button
      style={{
        padding: "1%",
        margin: "1%",
        backgroundColor: "gray",
        borderRadius: "5px",
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={() => navigation(-1)}
    >
      Back
    </button>
  );
}
