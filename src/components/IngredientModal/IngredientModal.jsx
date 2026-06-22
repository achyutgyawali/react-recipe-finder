import "./IngredientModal.css";

export function IngredientModal({ ingredients, onSeeMore, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Ingredients</h2>
        <table className="modal-table">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Weight (g)</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((item, i) => (
              <tr key={i}>
                <td>{item.text}</td>
                <td>{Math.round(item.weight)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="modal-actions">
          <button className="modal-btn" onClick={onSeeMore}>See More</button>
          <button className="modal-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}