const express = require('express')

const productsController = require(`../Controller/productsController`)

const userController = require('../Controller/userController')

const wishlistController = require('../Controller/wishlistController')

const cartController = require('../Controller/cartController')

const jwtMiddleware = require('../Middleware/jwtMiddleware')

const router = new express.Router()

// get all products

router.get(`/allproducts`,productsController.getAllProductsController)

//register 
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

//  get a product
router.get('/get-product/:id',productsController.getAProductController
)

// add to wishlist
router.post('/add-wishlist',jwtMiddleware,wishlistController.addToWishlist)

// get from wishlist
router.get('/wishlist/allproduct',jwtMiddleware,wishlistController.getfromWishlisstController)

// remove item from wishlist
router.delete('/wishlist/removeItem/:id',jwtMiddleware,wishlistController.removeWishlistController)

// add to cart
router.post('/add-cart',jwtMiddleware,cartController.addToCartController)

// get cart item
router.get('/cart/all-product',jwtMiddleware,cartController.getitemfromCartController)

//remove item from cart
router.delete('/cart/removeItem/:id',jwtMiddleware,cartController.removeItemController)

// increment cart
router.get('/cart/increment/:id',jwtMiddleware,cartController.incrementItemController)

// decrement cart
router.get('/cart/decrement/:id',jwtMiddleware,cartController.decrementItemController)

// empty cart
router.delete('/cart/empty',jwtMiddleware,cartController.emptyCartController)

module.exports = router