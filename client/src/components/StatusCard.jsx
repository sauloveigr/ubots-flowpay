import PropTypes from "prop-types";

const StatusCard = ({ type, data }) => {
  const { attendants, queue } = data;

  return (
    <div className="mt-8 p-6 border-2 border-gray-200 rounded-lg shadow-lg w-full">
      <h3 className="text-2xl font-bold text-purple-400">{type}</h3>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800">Atendentes:</h4>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          {attendants.map((attendant, index) => (
            <li key={index} className="flex flex-col space-y-1">
              <span className="font-medium text-gray-700">
                Atendente {attendant.id}:
              </span>
              <span className="text-gray-600">
                {attendant.clients.length > 0
                  ? attendant.clients.join(", ")
                  : "Sem clientes"}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800">Fila:</h4>
        <div className="mt-2">
          {queue.length > 0 ? (
            <span className="text-gray-700">{queue.join(", ")}</span>
          ) : (
            <span className="text-gray-500">Sem Fila</span>
          )}
        </div>
      </div>
    </div>
  );
};

StatusCard.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    attendants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        clients: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    queue: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default StatusCard;
