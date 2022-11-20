import { useRouter } from 'next/router';

const productDetail = () => {
const router = useRouter()
const productId = router.query.productId
    return (
        <div>This is detail of product {productId}</div>
    )
}

export default productDetail;