import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";
import Modal from "../modals/BaseModal";
import ConfirmLogoutModal from "../modals/ConfirmLogoutModal";

const ManagerSidebar = ({ Links }) => {
  const { logout } = useAuth();
  const { isOpenModal, modalType, openModal, closeModal } = useModal();
  const LogoBrand = "/assets/svg/logo-brand.svg?react";

  const handleLogout = () => {
    openModal("confirm", { type: "logout" });
  };

  const handleConfirmAction = () => {
    if (modalType === "confirm") {
      logout();
    }
    closeModal();
  };

  return (
    <aside className="fixed bottom-0 md:top-0 md:left-0 w-full md:w-60 lg:w-[270px] xl:w-[300px] 2xl:w-[360px] md:h-full bg-sidebar flex md:flex-col justify-between items-center md:py-10 z-50 bg-cover md:bg-bottom pt-2">
      <div className="flex flex-col items-center gap-9 2xl:gap-12 w-full">
        <img
          src={LogoBrand}
          alt="Logo Brand"
          className="hidden md:block w-16 2xl:w-20 h-auto"
        />

        <div
          className={`w-full overflow-x-auto md:overflow-y-auto px-2 md:px-3 lg:px-5 flex justify-between md:flex-col md:gap-3 md:h-[calc(100vh-320px)] 
            [&::-webkit-scrollbar]:ml-4
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-gray-300
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-purple-400
            [&::-webkit-scrollbar-thumb]:rounded-full
          `}
        >
          <nav className="flex justify-between md:flex-col 2xl:gap-3.5 md:gap-2 gap-3.5 w-full whitespace-nowrap md:whitespace-normal">
            {Links.map(({ to, label, icon, iconActive }) => (
              <NavLink
                key={to}
                to={to}
                className="inline-block shrink-0 md:my-0"
              >
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-2.5 px-3 md:px-3.5 lg:px-4 2xl:px-5 py-3 md:py-3 text-base md:text-sm lg:text-lg 2xl:text-[22px] rounded-full md:rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white text-purple"
                        : "text-white bg-transparent hover:bg-white/25"
                    }`}
                  >
                    <img
                      src={isActive ? iconActive : icon}
                      alt={`${label} icon`}
                      className="w-8 h-8 md:w-6 md:h-6 2xl:h-8 2xl:w-8 inline-block"
                    />
                    <p className="hidden md:block">{label}</p>
                  </div>
                )}
              </NavLink>
            ))}

            <div className="block -mt-3 md:hidden shrink-0">
              <Button
                onClick={handleLogout}
                variant="logout"
                icon={
                  <img
                    src="/assets/svg/sidebar-icon/logout-light.svg"
                    alt="log out"
                    className="h-9 md:h-7 2xl:h-10"
                  />
                }
              />
            </div>
          </nav>
        </div>
      </div>

      <div className="hidden md:block absolute pb-8 bottom-0 w-full px-5">
        <Button
          onClick={handleLogout}
          variant="logout"
          label="Log Out"
          icon={
            <img
              src="/assets/svg/sidebar-icon/logout-light.svg"
              alt="log out"
              className="h-9 md:h-7 2xl:h-10"
            />
          }
        />
      </div>

      <Modal
        isOpen={isOpenModal && modalType === "confirm"}
        onClose={closeModal}
      >
        <ConfirmLogoutModal
          onConfirm={handleConfirmAction}
          onCancel={closeModal}
        />
      </Modal>
    </aside>
  );
};

export default ManagerSidebar;
