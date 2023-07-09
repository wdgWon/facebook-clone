import TopOfHome from "./TopOfHome";
// import Content from "./contents";
import CreateContent from "./createcontents";
import UserContent from "./UserContents";

export default function PostSection() {
   return (
      <div className="shrink flex flex-col space-y-4 px-8 w-[680px]">
         <TopOfHome />
         <CreateContent />
         <UserContent />
      </div>
   );
}
