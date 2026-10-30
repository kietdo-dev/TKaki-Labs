'use client';

import { useState } from 'react';
import { SITE_DATA as data, type Product } from '@/lib/content';
import { arrow, Buy, getShopeeUrl, Price } from '@/components/shared/Shopee';
import SizeTable from '@/components/product/SizeTable';

function ProductCollection({ product }: { product: Product }) {
  const image = product.gallery[product.gallery.length - 1];

  return (
    <div className="collection-grid">
      <a
        className="product-image-link"
        href={`#san-pham/${product.id}`}
        aria-label={`Xem chi tiết ${product.name}`}
      >
        <img src={image.src} alt={image.alt} width={1200} height={1200} loading="lazy" />
      </a>
      <div className="product-summary">
        <span className="small-meta">TKaki-Labs / Quần short nam</span>
        <h3>{product.name}</h3>
        {product.nameIsTemporary && <p className="pending">Tên sản phẩm tạm thời</p>}
        <Price value={product.price} />
        <p style={{ marginTop: 22 }}>
          Xem những hình ảnh đầu tiên của mẫu quần short kaki từ TKaki-Labs.
        </p>
        <dl className="product-data">
          <div>
            <dt>Màu &amp; size</dt>
            <dd>
              {product.colors.length || product.sizes.length
                ? [...product.colors.map((color) => color.name), ...product.sizes].join(' · ')
                : 'Đang cập nhật'}
            </dd>
          </div>
          <div>
            <dt>Thông tin sản phẩm</dt>
            <dd>{product.fabric || 'Đang cập nhật'}</dd>
          </div>
        </dl>
        <a className="btn btn-outline" href={`#san-pham/${product.id}`}>
          Xem chi tiết <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default function HomePage({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const imageCount = product.gallery.length;
  const hasShop = Boolean(getShopeeUrl(data.links.shopeeShop));
  const stepImage = (step: number) => {
    setImageIndex((current) => (current + step + imageCount) % imageCount);
  };

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">{data.hero.eyebrow}</p>
          <h1>{data.hero.title}</h1>
          <p className="description">{data.hero.description}</p>
          <div className="hero-actions">
            <a className="btn" href="#san-pham">
              Xem sản phẩm <span aria-hidden="true">↓</span>
            </a>
            <Buy url={data.links.shopeeShop} extra="btn-outline" />
          </div>
          {!hasShop && <p className="link-note">Link Shopee đang được bổ sung.</p>}
        </div>
        <div className="hero-media">
          <img
            id="hero-photo"
            className="hero-photo"
            src={product.gallery[imageIndex].src}
            alt={product.gallery[imageIndex].alt}
            width={1200}
            height={1200}
            fetchPriority="high"
          />
          <div className="media-caption">
            <span>TKAKI-LABS / ẢNH SẢN PHẨM</span>
            <div className="arrows">
              <span
                id="hero-count"
                style={{ alignSelf: 'center', marginRight: 12 }}
                aria-live="polite"
              >
                {String(imageIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}
              </span>
              <button className="icon-btn" onClick={() => stepImage(-1)} aria-label="Xem ảnh trước">
                ←
              </button>
              <button className="icon-btn" onClick={() => stepImage(1)} aria-label="Xem ảnh tiếp theo">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="san-pham" className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Bộ sưu tập nhỏ.<br />Cho những ngày thường.</h2>
            <p className="eyebrow">01 — SẢN PHẨM</p>
          </div>
          <ProductCollection product={product} />
        </div>
      </section>

      <section id="bang-size" className="section">
        <div className="container size-layout">
          <div className="size-intro">
            <p className="eyebrow">02 — CHỌN SIZE</p>
            <h2>Chọn size từ số đo.</h2>
            <p>
              Đối chiếu số đo trước khi chọn quần. Bảng size của mẫu sản phẩm sẽ được cập nhật tại đây.
            </p>
            <a className="text-link" href={`tel:${data.contact.phone}`}>
              Hỏi shop về size {arrow}
            </a>
          </div>
          <div><SizeTable product={product} /></div>
        </div>
      </section>

      <section id="ve-tkaki" className="about">
        <div className="container about-inner">
          <p className="eyebrow">03 — VỀ TKAKI-LABS</p>
          <div>
            <h2>{data.about.title}</h2>
            <p>{data.about.description}</p>
            <p className="about-note">{data.about.note}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">04 — THÔNG TIN HỮU ÍCH</p>
            <h2>Bạn muốn biết thêm?</h2>
          </div>
          <div>
            {data.faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
