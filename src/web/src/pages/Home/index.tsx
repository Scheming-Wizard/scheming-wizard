import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../Components/Layout';
import { Product } from '../../Models/Product';

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<Product[]>('https://localhost:5173/api/catalog', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => setProducts(response.data))
        .catch((error) => console.error(error));
    }, []);

    return (
        <Layout>
            <h1>Home</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </Layout>
    );
};

export default Home;