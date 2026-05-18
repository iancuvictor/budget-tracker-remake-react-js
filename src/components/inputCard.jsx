import { InputField } from '../components';

function InputCard({ type }) {
  return (
    <>
      <h1>{type}</h1>
      <ul>
        <InputField/>
      </ul>
    </>
  );
}

export default InputCard;
