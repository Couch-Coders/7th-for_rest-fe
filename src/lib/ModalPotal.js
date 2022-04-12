import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
  const globalPortal = document.getElementById('modalPotal');
  return ReactDOM.createPortal(children, globalPortal);
};
export default ModalPortal;
