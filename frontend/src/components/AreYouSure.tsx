import { Button, Modal } from "flowbite-react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handler: () => void | Promise<void>;
};

const AreYouSure = ({ isOpen, setIsOpen, handler }: Props) => {
  return (
    <Modal dismissible show={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header className="bg-secondary">
        <span className="text-2xl font-bold text-text">Are you sure?</span>
      </Modal.Header>
      <Modal.Footer className="flex justify-between">
        <Button
          onClick={() => setIsOpen(false)}
          className="bg-blue hover:!bg-red hover:font-bold duration-300"
        >
          No
        </Button>

        <Button
          onClick={handler}
          className="bg-blue hover:!bg-red hover:font-bold duration-300"
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AreYouSure;
