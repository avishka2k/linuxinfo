import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/common/Card";


const Users = () => {
  const [isPopupShow, setPopupShow] = useState(false);

  return (
    <>
      <Breadcrumb pageName="Users" />
      <>
      <div className="grid grid-cols-4 gap-4">
       <Card title={'Root'} subtitle={'root'}/>
       <Card title={'Root'} subtitle={'root'}/>
       <Card title={'Root'} subtitle={'root'}/>
       <Card title={'Root'} subtitle={'root'}/>
       <Card title={'Root'} subtitle={'root'}/>
      </div>
      </>
    </>
  );
};

export default Users;
