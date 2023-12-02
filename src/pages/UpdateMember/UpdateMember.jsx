import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Form from "./Form";

function UpdateMember() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#F11A7B]">
      <Navbar></Navbar>
      <h1 className="text-center m-3 font-bold">Update</h1>
      <Form></Form>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default UpdateMember;