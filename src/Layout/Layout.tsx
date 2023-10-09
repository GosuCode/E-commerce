import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="">
        <div>
          <Navbar />
        </div>
        <div className="">
          <div className="">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
