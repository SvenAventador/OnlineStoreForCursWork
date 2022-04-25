import {makeAutoObservable} from "mobx" // слежка за переменными, которые будут переданы в параметр функции

export default class deviceStore {

  constructor() {

    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'}
    ]

    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'}
    ]

    this._device = [
      {id: 1, name: "Apple 12 pro", price: 75000, rating: 5, img: `https://252919.selcdn.ru/shoplot/32187755.jpg`},
      {id: 2, name: "Apple 12 pro", price: 75000, rating: 5, img: `https://252919.selcdn.ru/shoplot/32187755.jpg`},
      {id: 3, name: "Apple 12 pro", price: 75000, rating: 5, img: `https://252919.selcdn.ru/shoplot/32187755.jpg`},
      {id: 4, name: "Apple 12 pro", price: 75000, rating: 5, img: `https://252919.selcdn.ru/shoplot/32187755.jpg`},
    ]

    makeAutoObservable(this)

  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._device = devices
  }

  get types() { // гетеры для оптимизации переменных, которые были изменены
    return this._types
  }

  get brands() { // гетеры для оптимизации переменных, которые были изменены
    return this._brands
  }

  get devices() { // гетеры для оптимизации переменных, которые были изменены
    return this._device
  }

}
