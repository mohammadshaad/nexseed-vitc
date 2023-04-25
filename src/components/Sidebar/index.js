const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between fixed w-10 top-0 left-0 h-screen ">
      <div className=" h-1/3" />
      <div className="flex flex-1 flex-col h-full justify-evenly text-slate-400">
        <span className="-rotate-90">
        <a className="text-black-500 hover:text-[#1E90FF]" href="https://www.linkedin.com/company/nexseed-vit/" rel="noreferrer" target="_blank">
        &#8209;LinkedIn</a></span>
        <span className="-rotate-90">
        <a className="text-black-500 hover:text-[#1E90FF]" href="https://instagram.com/nexseedvitc?igshid=Yzg5MTU1MDY=" rel="noreferrer" target="_blank">
        &#8209;Instagram</a></span>
      </div>
    </div>
  );
};
export default Sidebar;
