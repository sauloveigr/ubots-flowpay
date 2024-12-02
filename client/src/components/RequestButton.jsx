import PropTypes from "prop-types";

const RequestButtons = ({ handleAddRequest }) => {
  const requestTypes = [
    { type: "Cartões", color: "bg-purple-400" },
    { type: "Empréstimos", color: "bg-cyan-400" },
    { type: "Outros", color: "bg-teal-400" },
  ];

  return (
    <div className="my-4 gap-2 sm:flex grid w-full">
      {requestTypes.map(({ type, color }) => (
        <button
          key={type}
          onClick={() => handleAddRequest(type)}
          className={`${color} text-white py-2 px-4 rounded w-full`}
        >
          Adicionar {type}
        </button>
      ))}
    </div>
  );
};

RequestButtons.propTypes = {
  handleAddRequest: PropTypes.func.isRequired,
};

export default RequestButtons;
