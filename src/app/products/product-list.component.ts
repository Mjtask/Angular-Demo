import { Component } from "@angular/core";
import { IProduct } from "./product"
@Component({
    selector: 'pm-product',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
    productTitle: string = "Product List!!";
    imageWidth: number = 120;
    imageMargin: number = 2;
    listFilter: string;
    setButton: boolean = false;
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden  Cart",
            "productCode": "GDN-909",
            "releaseDate": "Dec 10 1995",
            "description": "Coolllll!!!!",
            "price": 34000,
            "starRating": 3,
            "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/280962/ladyinreddances.png"
        },
        {
            "productId": 3,
            "productName": "Demon Gate",
            "productCode": "GDN-909",
            "releaseDate": "Dec 10 1995",
            "description": "Coolllll!!!!",
            "price": 5700,
            "starRating": 2,
            "imageUrl": "https://openclipart.org/image/90px/svg_to_png/290901/pixeldemon.png"
        }
    ];

    buttonToggle(): void {
        this.setButton = !this.setButton;
    }

    onClicked(e: string): void {
        this.productTitle = e;
    }
}