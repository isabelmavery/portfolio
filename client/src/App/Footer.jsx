export default function Footer(props) {
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      {BUILD_DATE} &copy; Isabel Avery
    </footer>
  );
}
