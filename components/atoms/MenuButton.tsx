type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MenuButton = ({ isOpen, onClick }: MenuButtonProps): JSX.Element => (
  <>
    <style jsx>{`
      label {
        display: flex;
        flex-direction: column;
        width: 40px;
        cursor: pointer;
        position: fixed;
        top: 1rem;
        left: 1rem;
      }

      label span {
        background: rgba(242, 97, 36, var(--tw-border-opacity));
        border-radius: 10px;
        height: 7px;
        margin: 4px 0;
        transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      }

      span:nth-of-type(1) {
        width: 50%;
      }

      span:nth-of-type(2) {
        width: 100%;
      }

      span:nth-of-type(3) {
        width: 75%;
      }

      input[type='checkbox'] {
        display: none;
      }

      input[type='checkbox']:checked ~ span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(8px, 0px);
      }

      input[type='checkbox']:checked ~ span:nth-of-type(2) {
        transform-origin: top;
        transform: rotatez(-45deg);
      }

      input[type='checkbox']:checked ~ span:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(18px, -11px) rotatez(45deg);
      }
    `}</style>
    <label className="label">
      <input type="checkbox" id="check" checked={isOpen} onChange={onClick} />
      <span className="span-1" />
      <span className="span-2" />
      <span className="span-3" />
    </label>
  </>
);

export default MenuButton;
