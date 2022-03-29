interface Props {
  children: string;
}

export default function Sucesfull({ children }: Props) {
  return (
    <>
      <div>
        <p className="text-white text-center">{children}</p>
      </div>
    </>
  );
}
