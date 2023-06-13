type props = {
  title: string;
  subtitle: string;
};
function Header({ title, subtitle }: props) {
  return (
    <div className="dark:bg-slate-500  dark:text-white">
      <div className=" ml-2 py-4  ">
        <div className=" text-4xl font-bold">{title}</div>
        <div className=" text-xl ">{subtitle}</div>
      </div>
    </div>
  );
}

export default Header;
