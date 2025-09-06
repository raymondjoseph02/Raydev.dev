function Badge({ title }: { title: string }) {
  return (
    <div className="py-2 px-3 rounded-full flex gap-2  items-center bg-white/14 w-fit">
      <span className="bg-success-500 size-2 rounded-full block" />
      <p className="text-white text-sm font-normal leading-[21px]">{title}</p>
    </div>
  );
}
export default Badge;
