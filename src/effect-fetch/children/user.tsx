import { User } from "@prisma/client";

export const Person = ({
  user,
  handleUpdateUserName,
}: {
  user: User | undefined;
  handleUpdateUserName: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
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
