import "./MyWorks.scss";

export function MyWorks() {
  return (
    <section>
      <h3 className="h3-content"> My journey</h3>
      <h2 className="h2-content">Qualification</h2>
      <div className="buttons-section">
        <button type="button">All</button>
        <button type="button">Web</button>
        <button type="button">Web3</button>
        <button type="button">Design</button>
      </div>
      <div className="my-works" />
    </section>
  );
}
