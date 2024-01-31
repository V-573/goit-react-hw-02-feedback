import './estilo.css';
const AddBtn = ({ addOne, title }) => {
    return <button className="add-btn" onClick={addOne}>{ title}</button>
};
export default AddBtn;