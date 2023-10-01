import styles from "./Button.module.scss";

const Button = ({
  type = "button",
  variant,
  size,
  onClick,
  children,
  className,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
