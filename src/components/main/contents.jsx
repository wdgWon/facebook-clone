import React, { Fragment } from "react";
import CreateContent from "./createcontents";
import UserContent from "./UserContents";

const Content = () => {
   return (
      <Fragment>
         <CreateContent />
         <UserContent />
      </Fragment>
   );
};

export default Content;
