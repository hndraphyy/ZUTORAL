import { useState } from "react";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [payload, setPayload] = useState(null);

  const openModal = (type = null, data = null) => {
    setModalType(type);
    setPayload(data);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalType(null);
    setPayload(null);
  };

  return {
    isOpenModal,
    modalType,
    payload,
    openModal,
    closeModal,
  };
};

export default useModal;
