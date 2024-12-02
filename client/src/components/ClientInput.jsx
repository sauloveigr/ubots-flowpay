import PropTypes from "prop-types";

const ClientInput = ({ client, setClient }) => {
  return (
    <input
      type="text"
      placeholder="Adicionar cliente"
      value={client}
      onChange={(e) => setClient(e.target.value)}
      className="border rounded py-2 px-4 mr-2 my-4 w-full"
    />
  );
};

ClientInput.propTypes = {
  client: PropTypes.string.isRequired,
  setClient: PropTypes.func.isRequired,
};

export default ClientInput;
