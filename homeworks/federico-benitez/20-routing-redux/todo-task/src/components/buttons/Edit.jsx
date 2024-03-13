import editIcon from '@assets/edit.svg';

export default function Edit(props) {
  return (
    <button type="button" {...props}>
      <img src={editIcon} alt="edit" />
    </button>
  );
}
