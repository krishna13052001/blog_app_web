import "./styles.css";
import Footer from "./components/footer";
import Nav from "./components/nav";

const blogList = [
  { text: "HOME", href: "/" },
  { text: "FOLLOW US!!", href: "#footer" },
  { text: "BLOGS", href: "/blog" },
];

export default function Blog() {
  return (
    <>
      <Nav items={blogList} />
      <Footer />
    </>
  );
}
