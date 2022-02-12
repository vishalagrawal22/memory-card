import '../styles/InfoList.css';

function InfoList() {
  return (
    <section className="info-list-section">
      <ul className="instructions">
        <li>Click on a pokemon card to catch it.</li>
        <li>
          <p>
            If you catch two pokemon of the same species, then they will fight
            till death. So you want to <strong>prevent it at all cost</strong>.
          </p>
        </li>
        <li>
          Catch as many pokemon as possible to showcase your pokemon mastery.
        </li>
      </ul>
    </section>
  );
}

export { InfoList };
