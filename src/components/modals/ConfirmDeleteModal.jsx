import Button from "../ui/Button";
import { TiDelete } from "react-icons/ti";

const ConfirmDeleteModal = ({ itemName, onConfirm, onCancel }) => {
  return (
    <div className="p-5 w-[85vw] md:w-[400px] 2xl:w-[500px]">
      <p className="text-base 2xl:text-xl text-center max-w-[220px] md:max-w-[280px] 2xl:max-w-sm mx-auto">
        Are you sure you want to delete {itemName}?
      </p>
      <div className="mx-auto my-4 flex justify-center items-center">
        <TiDelete className="w-1/2 h-1/2 text-purple" />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <Button
          variant="danger"
          className="col-span-6"
          onClick={onConfirm}
          label="Delete"
        />
        <Button
          variant="secondary"
          className="col-span-6"
          onClick={onCancel}
          label="Cancel"
        />
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
