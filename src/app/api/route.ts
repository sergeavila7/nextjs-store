import { getProducts } from 'app/services/shopify/indext'

export async function GET(){
    const products = await getProducts()

    return Response.json({products})
}