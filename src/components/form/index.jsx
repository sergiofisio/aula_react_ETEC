export default function Form({ children, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}
