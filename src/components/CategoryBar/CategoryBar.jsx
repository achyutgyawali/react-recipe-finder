import { CATEGORIES } from "../../constants/config";
import "./CategoryBar.css";

export function CategoryBar({ onSelect }) {
  return (
    <div className="category-container">
      {CATEGORIES.map((cat, index) => (
        <div className="category-item" key={index}>
          <button className="category-btn" onClick={() => onSelect(cat.name)}>
            <img className="category-icon" src={cat.icon} alt={cat.name} />
          </button>
          <span className="category-text">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}