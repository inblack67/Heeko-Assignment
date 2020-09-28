import { gql, useQuery } from '@apollo/client';
import Preloader from '../components/Preloader';
import CategoryItem from '../components/CategoryItem';
import Link from 'next/link';

const MyQuery = gql`
{
    categories{
        title,
        description
        _id,
        products{
            title
        }
    }
}
`;

const Home = () => {

    const { loading, data } = useQuery(MyQuery);

    if (loading) {
        return <Preloader />
    }

    const { categories } = data;

    return (
        <div className='container'>
            <p className="flow-text center">Categories</p>
            <div className="fixed-action-btn">
                <Link href='/cart'>
                    <a className="btn-floating btn-large red">
                        <i className="material-icons">
                            shopping_cart
                        </i>
                    </a>
                </Link>
            </div>
            <div className="row">
                {categories.map(cat => <CategoryItem key={cat._id} category={cat} />)}
            </div>
        </div>
    )
}

export default Home
