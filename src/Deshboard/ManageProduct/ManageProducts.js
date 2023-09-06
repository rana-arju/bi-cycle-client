import React, {useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import DeleteModal from '../../Shared/DeleteModal/DeleteModal';
import Loading from '../../Shared/Loading/Loading';
import ManageProduct from './ManageProduct';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
     //All Produts Show
      const { isLoading, error, data:products, refetch} = useQuery('products', () =>
     fetch(`https://by-cycle.onrender.com/allproducts`, {
         method: "GET",
          headers: {

            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
     }).then(res =>res.json())
   )
     if(isLoading){
        return <Loading />
    }
    if(error){
        return toast.error(error.message);
    }
    return (
        <div className='container px-2 mx-auto my-12'>
            		<PageTitle title="Manage Products" />

             <h2 className='uppercase text-center text-xl sm:text-2xl md:text-4xl my-5'>All Products</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           
            {
                products.map(product => <ManageProduct key={product._id} product ={product}  setDeletingProduct={setDeletingProduct} />)
            }
        </div>
        {deletingProduct && <DeleteModal setDeletingProduct={setDeletingProduct} deletingProduct={deletingProduct} refetch={refetch} />}
    </div>
    );
};

export default ManageProducts;