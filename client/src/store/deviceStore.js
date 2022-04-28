import { makeAutoObservable } from "mobx" // слежка за переменными, которые будут переданы в параметр функции

export default class deviceStore {

  constructor() {

    this._types = []

    this._brands = []

    this._device = []

    this._selectedType = {}
    this._selectedBrand = {}

    this._page = 1
    this._totalCount = 0
    this._limit = 3

    makeAutoObservable(this)

  }

  setTypes(types) {
    this._types = types
  }

  setSelectedType(type) {
    this.setPage(1)
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this.setPage(1)
    this._selectedBrand = brand
  }

  setPage(page) {
    this._page = page
  }

  setTotalCount(count) {
    this._totalCount = count
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

  get selectedType() {
    return this._selectedType
  }

  get brands() { // гетеры для оптимизации переменных, которые были изменены
    return this._brands
  }

  get devices() { // гетеры для оптимизации переменных, которые были изменены
    return this._device
  }

  get selectedBrand() { // гетеры для оптимизации переменных, которые были изменены
    return this._selectedBrand
  }

  get totalCount() { // гетеры для оптимизации переменных, которые были изменены
    return this._totalCount
  }
  get page() { // гетеры для оптимизации переменных, которые были изменены
    return this._page
  }
  get limit() { // гетеры для оптимизации переменных, которые были изменены
    return this._limit
  }

}
