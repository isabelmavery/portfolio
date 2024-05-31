import { ReactNode, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

/**
 * Simple Modal Component using React Portal. Places Modal at document body.
 */
const ESC_KEY = "Escape";

function ModalContent(props: {
  closeModal: () => void;
  renderModalContent: (closeModal: () => void) => ReactNode;
}) {
  const { renderModalContent, closeModal } = props;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === ESC_KEY) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div
      className="modal-content-wrapper"
      onClick={(e) => {
        // only close modal when clicking on outside wrapper
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="modal-content">{renderModalContent(closeModal)}</div>
    </div>
  );
}

export default function Modal(props: {
  renderModalContent: (closeModal: () => void) => ReactNode;
  ctaContent: ReactNode | string;
}) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);
  const { renderModalContent, ctaContent } = props;

  return (
    <>
      <button className="modal-cta" onClick={() => setShowModal(true)}>
        {ctaContent}
      </button>

      {showModal &&
        createPortal(
          <ModalContent
            renderModalContent={renderModalContent}
            closeModal={closeModal}
          />,
          document.body
        )}
    </>
  );
}
