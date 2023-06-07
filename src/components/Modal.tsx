import classes from './Modal.module.css';

type ModalProps = {
    children: React.ReactNode;
    onClose: any;
}

const Modal = (props: ModalProps) => {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onClose} />
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>
        </>
    )
}

export default Modal;