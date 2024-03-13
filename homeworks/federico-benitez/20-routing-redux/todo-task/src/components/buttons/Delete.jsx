import deleteIcon from '@assets/delete.svg';

export default function Delete(props) {
  return (
    <button type="button" {...props}>
      <img src={deleteIcon} alt="delete" />
    </button>
  );
}
