import React, { useContext } from "react";
import modalContext from "../../context/modalContext";
import ModalCloseIcon from "../../assets/icons/modal/close_modal.png";
import "./index.scss"

const Modal = () => {

    const { isModalOpen, setModalIsOpen } = useContext(modalContext);


    const handleCloseModal = () => {
        setModalIsOpen(false)
    }



    return (

        isModalOpen && (

            <div className="col-md-6 offset-md-3 col-12 p-4 bg-light my-auto shadow-sm" id="modal">

                <img src={ModalCloseIcon} alt="fermer le menu" id="close-modal" onClick={handleCloseModal} />


            </div>
        )
    )

}

export default Modal;