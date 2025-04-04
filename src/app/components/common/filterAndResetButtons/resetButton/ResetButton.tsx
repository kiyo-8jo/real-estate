interface ResetButtonProps {
  setFunction: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ResetButton = ({ setFunction, setCurrentPage }: ResetButtonProps) => {
  return (
    <button
      onClick={() => {
        setFunction(null);
        setCurrentPage(1);
      }}
    >
      リセット
    </button>
  );
};

export default ResetButton;
