import express from 'express'
import { authenticateSeller, authenticateUser } from '../middlewares/auth.middleware.js'
import { createProduct, getAllProducts, getProductDetails, getSellerProducts } from '../controllers/product.controller.js'
import { createProductValidator } from '../validator/product.validator.js'
import multer from 'multer'


const upload = multer({
    storage : multer.memoryStorage(),
    limits: {
        fileSize : 5 * 1024 * 1025 // 5MB
    }
})


const router = express.Router()


/**
 * @route POST /api/products
 * @description Create a new product
 * @access Private (Seller only)
 */
router.post('/', authenticateSeller, upload.array('images', 7), createProductValidator, createProduct)


/** 
 * @route GET /api/products/seller
 * @description Get all products of the authenticated seller
 * @access Private (Seller only)
 */
router.get('/seller', authenticateSeller, getSellerProducts)

/** 
 * @route GET /api/products
 * @description Get all products
 * @access Private 
 */
router.get('/', getAllProducts)



/**
 * @route GET /api/products/detail/:id
 * @description Get product details by ID
 * @access Public
 */
router.get("/detail/:id", getProductDetails)



export default router