import React, { Fragment } from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import { Fullscreen, DarkLayer, WhiteBoxWrapper, WhiteBox } from "./styled";
import { useTransition } from "react-spring";

export type ModalProps = {
  visible: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Modal = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}: ModalProps) => {
  const fadeTransition = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const slideUpTransition = useTransition(visible, null, {
    from: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    enter: {
      transform: `translateY(0px) scale(1)`,
      opacity: 1,
    },
    leave: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 15,
    },
  });

  return (
    <Fragment>
      {fadeTransition.map(({ item, key, props }) =>
        item ? (
          <Fullscreen style={props} key={key}>
            <DarkLayer style={props} />
          </Fullscreen>
        ) : null
      )}

      {slideUpTransition.map(({ item, key, props }) =>
        item ? (
          <Fullscreen style={props} key={key}>
            <WhiteBoxWrapper style={props}>
              <WhiteBox>
                {title && <h3>{title}</h3>}
                {description && <p>{description}</p>}
                {children}
                {!hideButtons && (
                  <ButtonGroup css={{ marginTop: "3rem" }} rightAlign>
                    {cancellable && (
                      <Button theme="tertiary" onClick={onCancel}>
                        {cancelText}
                      </Button>
                    )}
                    <Button onClick={onConfirm}>{confirmText}</Button>
                  </ButtonGroup>
                )}
              </WhiteBox>
            </WhiteBoxWrapper>
          </Fullscreen>
        ) : null
      )}
    </Fragment>
  );
};

Modal.defaultProps = {
  cancelText: "Cancel",
  confirmText: "Confirm",
};
export default Modal;
