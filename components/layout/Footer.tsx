import { SITE_DATA as data } from '@/lib/content';
import { getShopeeUrl, Logo } from '@/components/shared/Shopee';

export default function Footer() {
  const shopUrl = getShopeeUrl(data.links.shopeeShop);

  return (
    <footer id="footer">
      <section id="lien-he" className="contact">
        <div className="container contact-inner">
          <div>
            <h2>Liên hệ TKaki-Labs</h2>
            <p className="contact-copy">
              Cần thêm thông tin về sản phẩm?
              <br />
              Bạn có thể liên hệ trực tiếp với shop.
            </p>
          </div>
          <div className="contact-grid">
            <div>
              <p className="contact-label">Điện thoại</p>
              <a className="phone" href={`tel:${data.contact.phone}`}>
                {data.contact.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="contact-label">Địa chỉ</p>
              <p className="address">{data.contact.address}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <div className="container footer-inner">
          <Logo />
          <div className="footer-right">
            <span>TKaki-Labs · Quần short nam</span>
            {shopUrl ? (
              <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                Ghé shop trên Shopee ↗
              </a>
            ) : (
              <button disabled title="Link shop đang được bổ sung">
                Shopee · Chờ bổ sung link ↗
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
