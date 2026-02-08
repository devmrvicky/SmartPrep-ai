export default function SubmitErrorComp({
  errorString,
}: {
  errorString: string;
}) {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
      <p className="text-red-600 dark:text-red-400 text-sm">{errorString}</p>
    </div>
  );
}
