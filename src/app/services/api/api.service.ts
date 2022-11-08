import { Injectable } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { Order } from 'src/app/models/order.model';
import { Restaurant } from 'src/app/models/restaurant.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private adb: AngularFirestore
  ) {}

  collection(path) {
    return this.adb.collection(path);
  }

  banners = [  
    {banner: 'assets/imgs/1.jpg'},
    {banner: 'assets/imgs/2.jpg'},
    {banner: 'assets/imgs/3.jpg'}  
  ];
  
  restaurants: Restaurant[] = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 10,
      latitude: 28.649944693035188,
      longitude: 77.23961776224988
    },
    {
      uid: '12wefdefsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 10
    },
    {
      uid: '12wefdssrete',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
    },
  ];

  allRestaurants: Restaurant[] = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 10,
      latitude: 28.649944693035188,
      longitude: 77.23961776224988
    },
    {
      uid: '12wefdefsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 10
    },
    {
      uid: '12wefdssrete',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 10
    },
  ];

  restaurants1: Restaurant[] = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      address: 'Corona, Queens',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 10,
      latitude: 28.649944693035188,
      longitude: 77.23961776224988
    },
    {
      uid: '12wefdefsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      address: 'Lancaster, Pennsylvania',
      distance: 2.5,
      price: 10
    },
    {
      uid: '12wefdssrete',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      address: 'Brooklyn, New York',
      distance: 2.5,
      price: 10
    },
  ];
  
  categories: Category[] = [
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdefsdss"
    },
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
  ]; 

  allItems: Item[] = [
    
    {
      category_id: "e0",
      cover: "assets/imgs/salad.jpg",
      desc: "Great in taste",
      id: "i2",
      name: "Caprese Salad",
      price: 20,
      rating: 0,
      status: true,
      uid: "12wefdefsdss",
      variation: false,
      veg: true
  },
    {
        category_id: "e00",
        cover: "assets/imgs/pizza.jpg",
        desc: "Great in taste",
        id: "i1",
        name: "Pizza",
        price: 12,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e0",
        cover: "assets/imgs/salad.jpg",
        desc: "Great in taste",
        id: "i2",
        name: "Caprese Salad",
        price: 20,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e00",
        cover: "assets/imgs/pasta.jpg",
        desc: "Great in taste",
        id: "i3",
        name: "Pasta",
        price: 15,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
  ];

  addresses: Address[] = [     
    {
      address: "Lancaster, PA", 
      house: "2nd Floor", 
      id: "7Kox63KlggTvV7ebRKar", 
      landmark: "Fancy Bazar", 
      lat: 26.1830738, 
      lng: 91.74049769999999, 
      title: "Fancy", 
      user_id: "1"},
    {address: "Lancaster, United States", house: "Ground Floor", id: "8Kox63KlggTvV7ebRKar", landmark: "Lancaster", lat: 40.07026591890159, lng: -76.34309298946383, title: "Work", user_id: "1"},
    {
      address: "Lancaster, United States", 
      house: "2nd Floor", 
      id: "7Kox63KlggTvV7ebRDelhi", 
      landmark: "Lancaster", 
      lat: 40.07026591890159, 
      lng: -76.34309298946383,
      title: "Work", 
      user_id: "1"
    }
  ];

  orders: Order[] = [      
    {
      address: {address: "2074 swarr run rd, Lancaster, Pennsylvania 17601, United States", house: "dsgd", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "fdgs", lat: 40.07594196392339, lng: -76.34951774528653, title: "Home", user_id: "1" }, 
      deliveryCharge: 10,
      grandTotal: 5,
      id: "5aG0RsPuze8NX00B7uRP",
      order: [
        {category_id: "e0", cover: "assets/imgs/salad.jpg", desc: "Great in taste", id: "i2", name: "Caprese Salad", price: 20, rating: 0, status: true, uid: "12wefdefsdss", variation: false, veg: true, quantity: 1},
      ],
      paid: "COD",  
      restaurant: 
      // {address: "Christan Basti, India",  city: "909090567", closeTime: "21:00", cover: "", cuisines: ["Caribbean food", "North Indian", "Vietnamese"], delivery_time: 25, description: "dd", email: "DosaPlaza@gmail.com", latitude: 26.1286243, longitude: 91.8012675, uid: "12wefdefsdss", isClose: true, name: "DosaPlaza", openTime: "07:00", phone: 6619563867, price: 27, rating: 4.7, short_name: "stayfit", status: "open", totalRating: 13},
      {
        uid: '12wefdefsdss',
        cover: 'assets/imgs/2.jpg',
        name: 'Stayfit1',
        short_name: 'stayfit1',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 10
      },
      restaurant_id: "12wefdefsdss",  
      status: "created",
      time: "Jul 6, 2020 11:44 AM",
      total: 20.00,
      user_id: "1"
    },
    {
      address: {address: "436 Charles Rd, Lancaster, Pennsylvania 17603, United States", house: "dsgd", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "fdgs", lat: 40.02178037828534, lng: -76.31991833179474, title: "Home", user_id: "1" }, 
      deliveryCharge: 20,
      grandTotal: 44.00,
      id: "5aG0RsPuze8NX00B7uR1",
      order: [
        {category_id: "e00", cover: "assets/imgs/pizza.jpg", desc: "Great in taste", id: "i1", name: "Pizza", price: 12, quantity: 1, rating: 0, status: true, uid: "12wefdss", variation: false, veg: false},
        {category_id: "e00", cover: "assets/imgs/pasta.jpg", desc: "Great in taste", id: "i3", name: "Pasta", price: 15, quantity: 2, rating: 0, status: true, uid: "12wefdss", variation: false, veg: false}
      ],
      paid: "COD",  
      restaurant: {address: "1101 Biscayne Blvd, Miami, United States", city: "Miami", closeTime: "20:00", 
      cover: "assets/imgs/1.jpg", cuisines: ["Italian", "Mexican"], delivery_time: 25, description: "dd", 
      email: "stay@fit.com", uid: "12wefdss", 
      isClose: true, latitude: 25.79109541874331, longitude: -80.18735481594625, name: "Stayfit", openTime: "08:00", phone: 6786745745, price: 25, rating: 0, short_name: "stayfit", status: "open", totalRating: 0},    
      restaurant_id: "12wefdss",  
      status: "Delivered",
      time: "Jul 7, 2020 11:44 AM",
      total: 42,
      user_id: "1"
    },
  ];
}
