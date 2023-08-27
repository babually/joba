import { WithChildren } from "@/types";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";


type CustomModalProps = WithChildren<{
    header: string;
    isOpen: boolean;
}>

const CustomModal = ({ children, isOpen, header} : CustomModalProps) => {
   return (
    <Modal isOpen={isOpen} >
        <ModalContent>
            {(onClose) => (
                <>
                   <ModalHeader>{header}</ModalHeader>
                   <ModalBody>
                      { children }
                   </ModalBody>
                   <ModalFooter>
                      { children }
                   </ModalFooter>
                </>
                
            )}
        </ModalContent>
        
    </Modal>

   );
}

export default CustomModal;
