const ButtonComp = ({ btnClass }: any) => {
  const handleClick = () => {
    (document.getElementById("courses") as HTMLAnchorElement).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button type="button" className={btnClass} onClick={handleClick}>
      Get Started
    </button>
  );
};

export default ButtonComp;
