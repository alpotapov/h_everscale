import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  primary:
    'btn rounded-xl text-lg font-extralight bg-cornflower-blue border-cornflower-blue',
  white:
    'btn rounded-xl text-lg font-extralight bg-white border-cornflower-blue',
  emerald: 'btn rounded-xl text-lg font-extralight bg-emerald border-emerald',
  black: 'btn rounded-xl text-lg font-extralight bg-black border-black',
};

const PrimaryButton = ({
  onClick,
  disabled,
  children,
  className,
  icon,
  variation,
}) => {
  return (
    <button
      type="button"
      className={`${className} ${buttonStyles[variation]}`}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="w-full flex flex-row justify-between items-center">
        {icon ? (
          <img src={icon} alt="Button Icon" className="flex-shrink w-6" />
        ) : null}
        <div className="flex-grow">{children}</div>
      </div>
    </button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  variation: PropTypes.oneOf(['primary', 'white', 'black', 'emerald']),
};

PrimaryButton.defaultProps = {
  disabled: false,
  className: '',
  icon: undefined,
  variation: 'primary',
};

export default PrimaryButton;
