"use client";
import React, { useState } from "react";
import { useCafeuContext } from "@/context/CafeuContext";
import { Modal } from "react-bootstrap";
import Accordioninfo from "../menu/accordion";
const ProductLightBoxModal: React.FC = () => {
  const {
    isLightBoxModalOpen,
    closeLightBoxModal,
    product,
    addToCartWithQuantity,
    addToWishlist,
  } = useCafeuContext();

  const defaultQuickViewQuantity = 1;
  const [quickViewQuantity, setQuickViewQuantity] = useState<number>(
    defaultQuickViewQuantity
  );

  const handleQuickViewQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuickViewQuantity(newQuantity);
    }
  };
  return (
    <>
      <div className='container d-flex flex-column'>
        <Modal
          backdropClassName='lightbox-modal-backdrop'
          className='product-quick-view-modal'
          show={isLightBoxModalOpen}
          onHide={closeLightBoxModal}
          size='lg'
          centered
        >
          <Modal.Body className='lightbox-modal-body'>
            {product && (
              <div className='single-product-quick-view'>
                <div className='quick-view-container'>
                  <div className='quick-view-img-container'>
                    <img
                      src={`/${`https://navankebabs.com//${product.ItemImage}`}`}
                      alt='product-image'
                    />
                  </div>
                  <div className='quick-view-text-container'>
                    <h3 className='product-title'>{product.ItemTitle}</h3>
                    <div className='quick-view-price-rating'>
                      {/* <div className='shop-product-rating'>
                    <i className='icofont-ui-rating'></i>
                    <i className='icofont-ui-rating'></i>
                    <i className='icofont-ui-rating'></i>
                    <i className='icofont-ui-rating'></i>
                    <i className='icofont-ui-rating'></i>
                  </div> */}
                      <h4 className='quick-view-price-range'>
                        {product.Price}
                      </h4>
                    </div>
                    <div className='quick-view-product-infos'>
                      <Accordioninfo />
                    </div>
                    <div className='quick-view-product-action'>
                      <div className='quick-view-product-details-quantity'>
                        <button
                          className='minus-btn cart-product-minus'
                          onClick={() =>
                            handleQuickViewQuantityChange(quickViewQuantity - 1)
                          }
                        >
                          <i className='icofont-minus'></i>
                        </button>
                        <input
                          type='number'
                          name='product-quantity'
                          className='cart-product-quantity-input'
                          min={1}
                          max={99}
                          value={quickViewQuantity}
                          onChange={(e) =>
                            handleQuickViewQuantityChange(
                              Math.max(1, parseInt(e.target.value))
                            )
                          }
                        />
                        <button
                          className='plus-btn cart-product-plus'
                          onClick={() =>
                            handleQuickViewQuantityChange(quickViewQuantity + 1)
                          }
                        >
                          <i className='icofont-plus'></i>
                        </button>
                      </div>
                      <a
                        role='button'
                        className='custom-btn '
                        onClick={() =>
                          addToCartWithQuantity(
                            product.ItemId,
                            quickViewQuantity
                          )
                        }
                      >
                        Add to Cart
                      </a>
                      {/* <a
                    role='button'
                    className='quick-view-wishlist-btn'
                    onClick={() => addToWishlist(product.id)}
                  >
                    <i className='icofont-heart-alt'></i>
                  </a> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ProductLightBoxModal;
