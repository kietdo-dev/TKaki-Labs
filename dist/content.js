/* NỘI DUNG CỬA HÀNG
 * Chỉnh dữ liệu tại đây. Để null/[] khi chưa có thông tin xác nhận.
 * links.shopeeShop: link shop. products[].shopeeUrl: link chính xác của sản phẩm.
 * gallery: ảnh đã được cung cấp, chưa xác nhận là các màu đang bán.
 * colors: [{name: 'Tên màu', imageIndex: 0}]; sizes: ['Tên size'].
 * sizeGuide.rows: [{size: 'Tên size', waist: số đo, hip: số đo, length: số đo, leg: số đo}].
 * sizeGuide.measurementType: 'garment' (quần) hoặc 'body' (cơ thể).
 */
window.SITE_DATA = {
  brand: 'TKaki-Labs', logo: 'assets/logo.png',
  contact: {phone: '0398608803', phoneDisplay: '0398 608 803', address: '2/108H Ấp Đình, Hóc Môn, TPHCM'},
  links: {shopeeShop: null},
  hero: {eyebrow: 'QUẦN SHORT NAM', title: 'Quần short kaki.\nGọn gàng mỗi ngày.', description: 'TKaki-Labs tập trung vào những chiếc quần short cho sinh hoạt hằng ngày, được sản xuất bởi xưởng may gia đình.'},
  about: {title: 'Từ xưởng may gia đình\nđến chiếc quần bạn mặc.', description: 'TKaki-Labs là một thương hiệu nhỏ, với sản phẩm được làm tại xưởng may của gia đình. Chúng tôi trực tiếp giới thiệu và bán những chiếc quần do gia đình sản xuất.', note: 'Bắt đầu từ một bộ sưu tập nhỏ. Tập trung vào quần short kaki nam.'},
  products: [{
    id: 'short-kaki', name: 'Quần short kaki', nameIsTemporary: true, price: null,
    description: null, fabric: null, fit: null, colors: [], sizes: [], care: null, shopeeUrl: null,
    gallery: [1,2,3,4].map((n) => ({src: `assets/short-${n}.webp`, thumb: `assets/short-${n}-small.webp`, alt: `Quần short TKaki-Labs — ảnh sản phẩm ${n}`})),
    sizeGuide: {measurementType: 'garment', unit: 'cm', rows: []}
  }],
  faq: [
    {q: 'Làm sao để chọn size?', a: 'Bảng số đo đang được bổ sung. Bạn có thể gọi cho TKaki-Labs để hỏi thêm trước khi chọn size.'},
    {q: 'Mua sản phẩm ở đâu?', a: 'Sản phẩm sẽ được đặt mua trên Shopee. Link shop và link sản phẩm đang được bổ sung; hiện bạn có thể gọi trực tiếp để hỏi thông tin.'},
    {q: 'Làm sao để liên hệ với shop?', a: 'Gọi 0398 608 803 hoặc xem địa chỉ ở phần Liên hệ bên dưới.'},
    {q: 'Xem thông tin giao hàng và đổi trả ở đâu?', a: 'Khi link sản phẩm được bổ sung, bạn có thể xem thông tin giao hàng và chính sách áp dụng trên Shopee trước khi đặt mua.'}
  ]
};
