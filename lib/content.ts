/* NỘI DUNG CỬA HÀNG
 * Chỉnh dữ liệu tại đây. Để null/[] khi chưa có thông tin xác nhận.
 * links.shopeeShop: link shop. products[].shopeeUrl: link chính xác của sản phẩm.
 * colors là màu thể hiện trong ảnh, không xác nhận tình trạng còn hàng.
 * sizeGuide.rows: [{size, waist, hip, length, leg}]; measurementType là 'garment' hoặc 'body'.
 */
export type GalleryImage = { src: string; thumb: string; alt: string };
export type SizeRow = { size: string; waist: string | number; hip: string | number; length: string | number; leg: string | number };
export type Product = {
  id: string;
  name: string;
  nameIsTemporary: boolean;
  price: number | null;
  description: string | null;
  fabric: string | null;
  fit: string | null;
  colors: { name: string; imageIndex?: number }[];
  sizes: string[];
  care: string | null;
  shopeeUrl: string | null;
  gallery: GalleryImage[];
  sizeGuide: { measurementType: 'garment' | 'body'; unit: string; rows: SizeRow[]; image?: GalleryImage };
};
export type SiteData = {
  brand: string;
  logo: string;
  contact: { phone: string; phoneDisplay: string; address: string };
  links: { shopeeShop: string | null };
  hero: { eyebrow: string; title: string; description: string };
  about: { title: string; description: string; note: string };
  products: Product[];
  faq: { q: string; a: string }[];
};

const productImage = (path: string, alt: string): GalleryImage => {
  const src = `/assets/products/${path}.webp`;
  return { src, thumb: `/assets/products/${path}-small.webp`, alt };
};

export const SITE_DATA: SiteData = {
  brand: 'TKaki-Labs',
  logo: '/assets/logo.png',
  contact: { phone: '0398608803', phoneDisplay: '0398 608 803', address: '2/108H Ấp Đình, Hóc Môn, TPHCM' },
  links: { shopeeShop: null },
  hero: {
    eyebrow: 'QUẦN SHORT NAM',
    title: 'Quần short kaki.\nGọn gàng mỗi ngày.',
    description: 'TKaki-Labs tập trung vào những chiếc quần short cho sinh hoạt hằng ngày, được sản xuất bởi xưởng may gia đình.',
  },
  about: {
    title: 'Từ xưởng may gia đình\nđến chiếc quần bạn mặc.',
    description: 'TKaki-Labs là một thương hiệu nhỏ, với sản phẩm được làm tại xưởng may của gia đình. Chúng tôi trực tiếp giới thiệu và bán những chiếc quần do gia đình sản xuất.',
    note: 'Bộ sưu tập quần short kaki nam với nhiều kiểu dáng và màu sắc.',
  },
  products: [
    {
      id: 'short-kaki',
      name: 'Quần short kaki',
      nameIsTemporary: false,
      price: null,
      description: null,
      fabric: null,
      fit: null,
      colors: [
        { name: 'Xám than đậm', imageIndex: 1 },
        { name: 'Nâu kaki', imageIndex: 3 },
        { name: 'Xanh navy', imageIndex: 5 },
        { name: 'Xanh olive', imageIndex: 7 },
        { name: 'Nâu taupe', imageIndex: 9 },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      care: null,
      shopeeUrl: null,
      gallery: [
        productImage('short/cover', 'Ảnh tổng thể quần short kaki TKaki-Labs'),
        productImage('short/dark-charcoal-front', 'Mặt trước quần short kaki màu xám than đậm'),
        productImage('short/dark-charcoal-back', 'Mặt sau quần short kaki màu xám than đậm'),
        productImage('short/khaki-brown-front', 'Mặt trước quần short kaki màu nâu kaki'),
        productImage('short/khaki-brown-back', 'Mặt sau quần short kaki màu nâu kaki'),
        productImage('short/navy-blue-front', 'Mặt trước quần short kaki màu xanh navy'),
        productImage('short/navy-blue-back', 'Mặt sau quần short kaki màu xanh navy'),
        productImage('short/olive-green-front', 'Mặt trước quần short kaki màu xanh olive'),
        productImage('short/olive-green-back', 'Mặt sau quần short kaki màu xanh olive'),
        productImage('short/taupe-front', 'Mặt trước quần short kaki màu nâu taupe'),
      ],
      sizeGuide: {
        measurementType: 'garment',
        unit: 'cm',
        rows: [],
        image: productImage('short/size-guide', 'Bảng size quần short kaki: chiều dài quần và cân nặng tham khảo'),
      },
    },
    {
      id: 'short-tui-hop',
      name: 'Quần short túi hộp',
      nameIsTemporary: false,
      price: null,
      description: null,
      fabric: null,
      fit: null,
      colors: [
        { name: 'Kaki camel', imageIndex: 1 },
        { name: 'Xám than', imageIndex: 2 },
        { name: 'Nâu đậm', imageIndex: 3 },
        { name: 'Nâu đất', imageIndex: 4 },
        { name: 'Xanh navy', imageIndex: 5 },
        { name: 'Xanh olive', imageIndex: 6 },
        { name: 'Nâu taupe', imageIndex: 7 },
      ],
      sizes: [],
      care: null,
      shopeeUrl: null,
      gallery: [
        productImage('cargo/cover', 'Ảnh tổng thể quần short túi hộp TKaki-Labs'),
        productImage('cargo/camel-khaki', 'Quần short túi hộp màu kaki camel'),
        productImage('cargo/charcoal-grey', 'Quần short túi hộp màu xám than'),
        productImage('cargo/dark-brown', 'Quần short túi hộp màu nâu đậm'),
        productImage('cargo/earth-brown', 'Quần short túi hộp màu nâu đất'),
        productImage('cargo/navy-blue', 'Quần short túi hộp màu xanh navy'),
        productImage('cargo/olive-green', 'Quần short túi hộp màu xanh olive'),
        productImage('cargo/taupe-brown', 'Quần short túi hộp màu nâu taupe'),
      ],
      sizeGuide: { measurementType: 'garment', unit: 'cm', rows: [] },
    },
    {
      id: 'short-vien-soc',
      name: 'Quần short túi hộp viền sọc',
      nameIsTemporary: false,
      price: null,
      description: null,
      fabric: null,
      fit: null,
      colors: [
        { name: 'Nâu xám', imageIndex: 1 },
        { name: 'Nâu hạt dẻ', imageIndex: 2 },
        { name: 'Nâu đậm', imageIndex: 3 },
        { name: 'Kaki vàng', imageIndex: 4 },
        { name: 'Nâu vừa', imageIndex: 5 },
        { name: 'Xanh navy', imageIndex: 6 },
        { name: 'Xanh olive', imageIndex: 7 },
      ],
      sizes: [],
      care: null,
      shopeeUrl: null,
      gallery: [
        productImage('piped-cargo/cover', 'Ảnh tổng thể quần short túi hộp viền sọc TKaki-Labs'),
        productImage('piped-cargo/charcoal-brown-front', 'Mặt trước quần short túi hộp viền sọc màu nâu xám'),
        productImage('piped-cargo/chestnut-brown-front', 'Mặt trước quần short túi hộp viền sọc màu nâu hạt dẻ'),
        productImage('piped-cargo/dark-brown-front', 'Mặt trước quần short túi hộp viền sọc màu nâu đậm'),
        productImage('piped-cargo/khaki-tan-front', 'Mặt trước quần short túi hộp viền sọc màu kaki vàng'),
        productImage('piped-cargo/medium-brown-front', 'Mặt trước quần short túi hộp viền sọc màu nâu vừa'),
        productImage('piped-cargo/navy-blue-front', 'Mặt trước quần short túi hộp viền sọc màu xanh navy'),
        productImage('piped-cargo/olive-green-front', 'Mặt trước quần short túi hộp viền sọc màu xanh olive'),
      ],
      sizeGuide: { measurementType: 'garment', unit: 'cm', rows: [] },
    },
  ],
  faq: [
    { q: 'Làm sao để chọn size?', a: 'Mẫu quần short kaki có bảng size tham khảo ở trang sản phẩm. Với các mẫu khác, bạn có thể gọi cho TKaki-Labs để hỏi thêm trước khi chọn.' },
    { q: 'Mua sản phẩm ở đâu?', a: 'Sản phẩm sẽ được đặt mua trên Shopee. Link shop và link sản phẩm đang được bổ sung; hiện bạn có thể gọi trực tiếp để hỏi thông tin.' },
    { q: 'Làm sao để liên hệ với shop?', a: 'Gọi 0398 608 803 hoặc xem địa chỉ ở phần Liên hệ bên dưới.' },
    { q: 'Xem thông tin giao hàng và đổi trả ở đâu?', a: 'Khi link sản phẩm được bổ sung, bạn có thể xem thông tin giao hàng và chính sách áp dụng trên Shopee trước khi đặt mua.' },
  ],
};
