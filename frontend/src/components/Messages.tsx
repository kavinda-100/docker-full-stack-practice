import { useGetData } from "../hooks/useGetData";

export const Messages = ({ url }: { url: string }) => {
  const { data, loading, error } = useGetData(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        color: "#000000",
      }}
    >
      <h2>Messages</h2>
      <p>{data?.message}</p>
    </div>
  );
};
