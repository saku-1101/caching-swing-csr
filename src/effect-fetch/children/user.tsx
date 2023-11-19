import { User } from "@prisma/client";

import { FormEvent } from "react";
// import { useNavigate } from "react-router-dom";

export const Person = ({ user }: { user: User | undefined }) => {
  // const navigate = useNavigate();
  async function handleUpdateUserName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/update/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.get("name") }),
    });
    window.location.reload();
    // またはnavigate(0);
  }
  if (!user) return <div>User is not defined.</div>;
  return (
    <>
      <div>Hello {user.name}!</div>
      <form onSubmit={handleUpdateUserName}>
        <label htmlFor="name">Enter your new name:</label>
        <br />
        <input
          type="text"
          name="name"
          style={{ padding: "2px", margin: "2px" }}
        />
        <button type="submit" style={{ padding: "2px", margin: "2px" }}>
          Update Name
        </button>
      </form>
    </>
  );
};
