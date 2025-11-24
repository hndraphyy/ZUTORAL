// src/components/modals/DeleteModal.jsx
export const DeleteModal = ({ itemName, onConfirm, onCancel }) => (
  <div className="text-center">
    <h3 className="text-lg font-bold mb-2">Hapus {itemName}?</h3>
    <p className="mb-4 text-gray-600">Aksi ini tidak bisa dibatalkan.</p>
    <div className="flex gap-2">
      <button onClick={onConfirm} className="flex-1 bg-red-500 text-white py-2 rounded">Ya, Hapus</button>
      <button onClick={onCancel} className="flex-1 bg-gray-300 py-2 rounded">Batal</button>
    </div>
  </div>
);