import { useState, useEffect } from "react";
import ClientInput from "./ClientInput";
import RequestButtons from "./RequestButton";
import StatusCard from "./StatusCard";

const API_URL = "http://localhost:3000";

const Status = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [client, setClient] = useState("");

  const fetchStatus = async () => {
    try {
      const response = await fetch(`${API_URL}/status`);
      const data = await response.json();
      setStatus(data);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  const handleAddRequest = async (type) => {
    if (!client) {
      setError("Por favor, digite um nome de cliente.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, client }),
      });

      if (!response.ok) {
        throw new Error("Error adding request.");
      }

      setClient("");
      setError(null);
      fetchStatus();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  if (!status) {
    return <p>Carregando status...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md w-full max-w-[1200px]">
      <div className="lg:flex w-full lg:gap-8 grid">
        <ClientInput client={client} setClient={setClient} />
        <RequestButtons handleAddRequest={handleAddRequest} />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="md:flex gap-4">
        {Object.entries(status).map(([type, data]) => (
          <StatusCard key={type} type={type} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Status;
