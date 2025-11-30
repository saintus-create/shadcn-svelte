import Image from 'next/image';
import { Heart, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

export default function Productcard() {
  const products = [
    {
      id: 1,
      name: 'HydraGlow Vitamin C Serum',
      description:
        'Brightens skin tone and reduces dark spots with potent vitamin C and hyaluronic acid.',
      price: 32,
      rating: 5,
      reviews: 184,
      image: '/product/product1.jpg',
      featured: true,
    },
    {
      id: 2,
      name: 'AquaBoost Hydrating Gel',
      description: 'Lightweight gel moisturizer for all-day hydration and a dewy finish.',
      price: 28,
      rating: 4,
      reviews: 97,
      image: '/product/product2.jpg',
      featured: false,
    },
    {
      id: 3,
      name: 'PureShield SPF 50+ Sunscreen',
      description: 'Broad-spectrum sun protection with a non-greasy, invisible finish.',
      price: 22,
      rating: 5,
      reviews: 210,
      image: '/product/product3.jpg',
      featured: false,
    },
    {
      id: 4,
      name: 'Renewal Night Repair Cream',
      description:
        'Deeply nourishing night cream that repairs and revitalizes skin while you sleep.',
      price: 36,
      rating: 4,
      reviews: 75,
      image: '/product/product4.jpg',
      featured: true,
    },
    {
      id: 5,
      name: 'Radiance Boosting Face Mist',
      description:
        'Refreshing face mist with rose water and aloe vera for instant hydration and glow.',
      price: 18,
      rating: 4,
      reviews: 120,
      image: '/product/product5.jpg',
      featured: false,
    },
    {
      id: 6,
      name: 'Soothing Lemon Gel',
      description: 'Natural aloe vera gel to soothe and hydrate irritated skin.',
      price: 15,
      rating: 5,
      reviews: 85,
      image: '/product/product6.jpg',
      featured: false,
    },
  ];

  return (
    <div className="px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-muted-foreground text-sm font-medium mb-2">Skin Care Collection</p>
          <h1 className="text-foreground text-3xl font-bold mb-8">Our Skin Care Products</h1>

          <div className="flex items-center gap-6 mb-8">
            <Button variant="default" className="px-6 py-2 rounded-full text-sm font-medium">
              Featured
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Best Seller
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              New Arrival
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-48 rounded-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="serums">Serums</SelectItem>
                <SelectItem value="moisturizers">Moisturizers</SelectItem>
                <SelectItem value="sunscreens">Sunscreens</SelectItem>
                <SelectItem value="night-creams">Night Creams</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48 rounded-full">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spray">Sprays</SelectItem>
                <SelectItem value="wipes">Wipes</SelectItem>
                <SelectItem value="solution">Solutions</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48 rounded-full">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="new">New Arrivals</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="ml-auto rounded-full">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group">
              <div className="relative rounded-2xl p-8 mb-4 aspect-square flex items-center justify-center bg-muted">
                <Button variant="ghost" size="icon" className="absolute top-4 left-4 rounded-full">
                  <Heart className="w-5 h-5 text-muted-foreground" />
                </Button>
                {product.featured && (
                  <span className="absolute top-4 right-4 bg-background text-foreground px-3 py-1 rounded-full text-xs font-medium border">
                    Featured
                  </span>
                )}
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="space-y-3">
                <h3 className="text-foreground font-medium text-lg leading-tight">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(5 - product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-muted-foreground" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-foreground text-2xl font-bold">${product.price}</span>
                  <Button className="rounded-full px-6 py-2 text-sm font-medium">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
