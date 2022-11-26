const InputLabel: React.FC<{ htmlFor?: string; label?: string }> = ({
  htmlFor,
  label,
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={htmlFor}
          className="form-label mb-1 inline-block text-sm font-medium text-white"
        >
          {label}
        </label>
      )}
    </>
  );
};

export default InputLabel;
