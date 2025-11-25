// ConfirmDeleteModal.jsx
export default function ConfirmDeleteModal({ itemName, onConfirm, onCancel }) {
  return (
    <div>
      <p>Yakin hapus {itemName}?</p>
      <button onClick={onConfirm}>Hapus</button>
      <button onClick={onCancel}>Batal</button>
    </div>
  );
}