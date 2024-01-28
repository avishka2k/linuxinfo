import Breadcrumb from '../../components/Breadcrumb';
import TableTwo from '../../components/TableTwo';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';

const Drafts = () => {

  const products = [
    {
      id: 1,
      name: 'Apple Watch Series 7',
      category: 'Electronics',
      price: 269,
      sold: 22,
      profit: 45,
      image: ProductOne,
    },
    {
      id: 2,
      name: 'Macbook Pro M1',
      category: 'data',
      price: 546,
      sold: 34,
      profit: 125,
      image: ProductTwo,
    },
    {
      id: 3,
      name: 'Dell Inspiron 15',
      category: 'Electronics',
      price: 443,
      sold: 64,
      profit: 247,
      image: ProductThree,
    },
    {
      id: 4,
      name: 'HP Probook 450',
      category: 'data',
      price: 499,
      sold: 72,
      profit: 103,
      image: ProductFour,
    },
  ];
  return (
    <>
      <Breadcrumb pageName="Drafts" />

      <TableTwo products={products}/>
    </>
  );
};

export default Drafts;
