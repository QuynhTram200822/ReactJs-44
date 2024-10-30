const LayoutFrontend = ({ children }) => {
  return (
    <>
      <h2>Header</h2>
      <main>{children}</main>
      <h2>Footer</h2>
    </>
  );
};

export default LayoutFrontend;
