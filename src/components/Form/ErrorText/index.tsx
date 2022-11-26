const ErrorText: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="text-xs text-red-500">
      {message ? <span>{message}</span> : <span>&nbsp;</span>}
    </div>
  );
};

export default ErrorText;
