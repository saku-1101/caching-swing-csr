import {
  useNavigate,
} from 'react-router-dom';

export default function LinkButton({
  link,
  label,
}: {
  link: string;
  label: string;
}) {
  const navigation = useNavigate();
  function handleClick(link: string) {
    navigation(link, {replace: true});
  }

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
      onClick={() => handleClick(link)}
    >
      {label}
    </button>
  );
}
