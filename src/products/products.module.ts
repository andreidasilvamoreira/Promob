import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repositories/product.repository';
import { ProductPartService } from './services/product-part.service';
import { ProductPartRepository } from './repositories/product-part.repository';

@Module({
  controllers: [ProductController, ProductPartController],
  providers: [
    ProductService,
    ProductRepository,
    ProductPartService,
    ProductPartRepository,
  ],
})
export class ProductsModule {}
