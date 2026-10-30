'use client';

import { useState } from 'react';
import { SITE_DATA as data, type Product } from '@/lib/content';
import { arrow, Buy, getShopeeUrl, Price } from '@/components/shared/Shopee';
import SizeTable from '@/components/product/SizeTable';

type ZoomHandler = (src: string, alt: string, label: string) => void;

export default function ProductDetail({
  product,
  onZoom,
}: {
  product: Product;
  onZoom: ZoomHandler;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const image = product.gallery[imageIndex];
  const hasProductUrl = Boolean(getShopeeUrl(product.shopeeUrl));

  return (
    <article className="container detail">
      <div className="breadcrumb">
        <a href="#">Trang chủ</a>
        <span aria-hidden="true">/</span>
        <a href="#san-pham">Sản phẩm</a>
        <span aria-hidden="true">/</span>
        <span>{product.name}</span>
      </div>
      <div className="detail-grid">
        <div>
          <button
            className="gallery-main"
            aria-label="Phóng lớn ảnh sản phẩm"
            onClick={() => onZoom(image.src, image.alt, `Ảnh sản phẩm ${imageIndex + 1} / ${product.gallery.length}`)}
          >
            <img id="detail-image" src={image.src} alt={image.alt} width={1200} height={1200} />
            <span className="expand-label">Phóng lớn ↗</span>
          </button>
          <div className="gallery-thumbs" role="group" aria-label="Chọn ảnh sản phẩm">
            {product.gallery.map((galleryImage, index) => (
              <button
                key={galleryImage.src}
                className="thumb"
                aria-label={`Xem ảnh ${index + 1}`}
                aria-pressed={index === imageIndex}
                onClick={() => setImageIndex(index)}
              >
                <img
                  src={galleryImage.thumb}
                  alt={`Ảnh ${index + 1}`}
                  width={360}
                  height={360}
                />
              </button>
            ))}
          </div>
          <p className="gallery-note">
            Hình ảnh do TKaki-Labs cung cấp. Màu đang bán sẽ được xác nhận sau.
          </p>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">TKAKI-LABS / QUẦN SHORT NAM</p>
          <h1>{product.name}</h1>
          {product.nameIsTemporary && <p className="pending">Tên sản phẩm tạm thời</p>}
          <Price value={product.price} />
          <p className="detail-desc">
            {product.description ||
              'Thông tin chi tiết của mẫu quần này đang được bổ sung. Bạn có thể xem ảnh hoặc liên hệ shop để hỏi thêm.'}
          </p>
          <dl className="spec-list">
            <div className="spec-row"><dt>Chất liệu</dt><dd>{product.fabric || 'Đang cập nhật'}</dd></div>
            <div className="spec-row"><dt>Phom quần</dt><dd>{product.fit || 'Đang cập nhật'}</dd></div>
            <div className="spec-row"><dt>Màu đang bán</dt><dd>{product.colors.length ? product.colors.map((color) => color.name).join(' · ') : 'Chưa có thông tin'}</dd></div>
            <div className="spec-row"><dt>Size</dt><dd>{product.sizes.length ? product.sizes.join(' · ') : 'Đang cập nhật'}</dd></div>
          </dl>
          {product.colors.length > 0 && (
            <div className="variant-buttons" role="group" aria-label="Chọn ảnh theo màu">
              {product.colors.map((color, index) => (
                <button
                  key={color.name}
                  className="variant"
                  aria-pressed={selectedColor === index}
                  onClick={() => {
                    const galleryIndex = color.imageIndex;
                    if (
                      typeof galleryIndex === 'number' &&
                      Number.isInteger(galleryIndex) &&
                      product.gallery[galleryIndex]
                    ) {
                      setImageIndex(galleryIndex);
                    }
                    setSelectedColor(index);
                  }}
                >
                  {color.name}
                </button>
              ))}
            </div>
          )}
          <a className="text-link size-link" href={`#san-pham/${product.id}/bang-size`}>
            Xem bảng size <span aria-hidden="true">↓</span>
          </a>
          <Buy url={product.shopeeUrl} />
          <p className="link-note">
            {hasProductUrl
              ? 'Chọn phân loại và đặt mua tại Shopee.'
              : 'Link sản phẩm Shopee đang được bổ sung.'}
          </p>
          <div className="detail-blocks">
            <details>
              <summary>Hướng dẫn bảo quản</summary>
              <p>{product.care || 'Hướng dẫn bảo quản cụ thể đang được bổ sung.'}</p>
            </details>
            <details>
              <summary>Thông tin mua hàng</summary>
              <p>
                Việc đặt mua sẽ được thực hiện trên Shopee.{' '}
                {hasProductUrl
                  ? 'Xem thông tin giao hàng và chính sách áp dụng tại trang sản phẩm trước khi mua.'
                  : 'Vui lòng chờ link sản phẩm hoặc gọi shop để hỏi thêm.'}
              </p>
            </details>
          </div>
          <a className="text-link" href={`tel:${data.contact.phone}`}>
            Gọi shop: {data.contact.phoneDisplay} {arrow}
          </a>
        </div>
      </div>
      <section id="detail-size" className="detail-size">
        <p className="eyebrow">HƯỚNG DẪN CHỌN SIZE</p>
        <h2>Bảng số đo sản phẩm</h2>
        <SizeTable product={product} />
      </section>
    </article>
  );
}
